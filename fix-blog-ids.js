const fs = require('fs');
const path = require('path');

// Funktion för att skriva tillbaka blogPosts till filen
const writeBlogPostsToFile = (updatedPosts) => {
  // Läs hela filen
  const filePath = './src/data/blogData.js';
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Hitta början av blogPosts arrayen
  const startMarker = 'export const blogPosts = processAllArticlesSequential([';
  const startIndex = fileContent.indexOf(startMarker);
  
  if (startIndex === -1) {
    console.error('❌ Kunde inte hitta blogPosts arrayen i filen');
    return false;
  }
  
  // Hitta slutet av arrayen (efter sista artikeln)
  let braceCount = 0;
  let endIndex = startIndex;
  let inArray = false;
  
  for (let i = startIndex; i < fileContent.length; i++) {
    if (fileContent[i] === '[') {
      braceCount++;
      inArray = true;
    } else if (fileContent[i] === ']') {
      braceCount--;
      if (inArray && braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  // Skapa nytt innehåll för blogPosts arrayen
  const newArrayContent = updatedPosts.map(post => {
    // Hantera bilder - om det är en WebP-fil, använd variabelnamnet, annars använd URL
    let imageValue;
    if (typeof post.image === 'string' && post.image.includes('.webp')) {
      // Det är en WebP-fil, använd variabelnamnet
      const imageName = post.image.split('/').pop().replace('.webp', '');
      imageValue = imageName;
    } else {
      // Det är en URL eller annat, använd som sträng
      imageValue = `"${post.image}"`;
    }
    
    return `  {
    id: ${post.id},
    title: "${post.title}",
    excerpt: "${post.excerpt}",
    category: "${post.category}",
    author: "${post.author}",
    authorTitle: "${post.authorTitle}",
    date: "${post.date}",
    image: ${imageValue},
    featured: ${post.featured},
    latest: ${post.latest},
    tags: ${JSON.stringify(post.tags)},
    content: \`${post.content}\`
  }`;
  }).join(',\n');
  
  // Ersätt den gamla arrayen med den nya
  const newFileContent = fileContent.substring(0, startIndex) + 
    'export const blogPosts = processAllArticlesSequential([\n' + 
    newArrayContent + 
    '\n]);' + 
    fileContent.substring(endIndex + 1);
  
  // Skriv tillbaka till filen
  fs.writeFileSync(filePath, newFileContent, 'utf8');
  console.log('✅ Filen har uppdaterats med nya ID:n');
  return true;
};

// Funktion för att automatiskt fixa alla ID:n efter att du manuellt ändrat id: "NY" till id: 1
const fixIdsAfterManualChange = () => {
  // Läs blogData.js som text för att undvika WebP-import problem
  const fs = require('fs');
  const filePath = './src/data/blogData.js';
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extrahera blogPosts arrayen från filen
  const blogPostsMatch = fileContent.match(/export const blogPosts = processAllArticlesSequential\(\[([\s\S]*?)\]\);/);
  if (!blogPostsMatch) {
    console.error('❌ Kunde inte hitta blogPosts arrayen');
    return [];
  }
  
  // Skapa en temporär modul för att evaluera blogPosts
  const tempModule = `
    // Temporära imports för att undvika WebP-fel
    const running = 'running.webp';
    const mri = 'mri.webp';
    const shoulder_joint_pain = 'shoulder_joint_pain.webp';
    const knee_joint_pain = 'knee_joint_pain.webp';
    const shoulder_pain = 'shoulder_pain.webp';
    const achilles_tendon_pain = 'achilles_tendon.webp';
    const kettlebell_training = 'kettlebell_training.webp';
    const hamstringsmärta = 'hamstringsmärta.webp';
    const artros_knä = 'artros_knä.webp';
    const who_guidelines = 'who_guidelines.webp';
    
    // Funktioner
    const calculateReadingTime = (text) => {
      const wordsPerMinute = 200;
      const wordCount = text.split(/\\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);
      return \`\${readingTime} min read\`;
    };
    
    const extractTextFromHTML = (html) => {
      return html
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
    };
    
    const processAllArticlesSequential = (posts) => {
      const newArticles = posts.filter(p => p.id === "NY");
      const oldArticles = posts.filter(p => p.id !== "NY");
      const all = [...newArticles, ...oldArticles];
    
      return all.map((post, i) => ({
        ...post,
        id: i + 1,
        latest: i === 0,
        readTime: calculateReadingTime(extractTextFromHTML(post.content))
      }));
    };
    
    const blogPosts = processAllArticlesSequential([
      ${blogPostsMatch[1]}
    ]);
    
    module.exports = { blogPosts };
  `;
  
  // Skapa en temporär fil och kör den
  const tempFile = './temp-blog-data.js';
  fs.writeFileSync(tempFile, tempModule);
  
  try {
    const { blogPosts } = require(tempFile);
    fs.unlinkSync(tempFile); // Ta bort temporär fil
    
    return blogPosts;
  } catch (error) {
    if (fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }
    console.error('❌ Fel vid läsning av blogPosts:', error.message);
    return [];
  }
  
  // Hitta alla artiklar som har samma ID (konflikt efter manuell ändring)
  const idCounts = {};
  blogPosts.forEach(post => {
    idCounts[post.id] = (idCounts[post.id] || 0) + 1;
  });
  
  // Om det finns dubletter av ID 1, fixa automatiskt
  if (idCounts[1] > 1) {
    console.log('🔧 Hittade dubletter av ID 1 - fixar automatiskt...');
    
    // Hitta alla artiklar med ID 1
    const articlesWithId1 = blogPosts.filter(p => p.id === 1);
    
    // Ta den första som den nya artikeln (den som var "NY")
    const newArticle = articlesWithId1[0];
    const otherArticles = blogPosts.filter(p => p.id !== 1);
    
    // Sätt den nya artikeln först, sedan alla andra
    const reorderedArticles = [newArticle, ...otherArticles];
    
    // Uppdatera alla ID:n sekventiellt
    reorderedArticles.forEach((article, index) => {
      article.id = index + 1;
      // Endast första artikeln (ID 1) ska ha latest: true
      article.latest = index === 0;
    });
    
    // Skriv tillbaka till filen
    writeBlogPostsToFile(reorderedArticles);
    
    console.log('✅ ID-konflikter fixade automatiskt!');
    console.log('📝 Nyaste artikel (ID 1):', newArticle.title);
    console.log('📊 Totalt antal artiklar:', reorderedArticles.length);
    
    return reorderedArticles;
  }
  
  // Om inga konflikter, kör normal fixAllArticleIds
  return fixAllArticleIds();
};

// Funktion för att automatiskt fixa alla ID:n efter att du klistrat in en ny artikel
const fixAllArticleIds = () => {
  // Använd samma metod som fixIdsAfterManualChange
  const blogPosts = fixIdsAfterManualChange();
  
  // Hitta alla artiklar med "NY" som ID
  const newArticles = blogPosts.filter(p => p.id === "NY");
  const oldArticles = blogPosts.filter(p => p.id !== "NY");
  
  // Sätt NY-artiklar först, sedan övriga
  const allArticles = [...newArticles, ...oldArticles];
  
  // Uppdatera alla ID:n sekventiellt
  allArticles.forEach((article, index) => {
    article.id = index + 1;
    // Endast första artikeln (ID 1) ska ha latest: true
    article.latest = index === 0;
  });
  
  // Skriv tillbaka till filen
  writeBlogPostsToFile(allArticles);
  
  console.log('✅ Alla artikel-ID:n har fixats automatiskt!');
  console.log('📝 Nyaste artikel (ID 1):', allArticles[0].title);
  console.log('📊 Totalt antal artiklar:', allArticles.length);
  
  return allArticles;
};

// Exportera funktionerna
module.exports = {
  fixIdsAfterManualChange,
  fixAllArticleIds
};

// Om scriptet körs direkt
if (require.main === module) {
  const result = fixIdsAfterManualChange();
  console.log('✅ ID-fixning klar!');
} 