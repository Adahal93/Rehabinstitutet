const fs = require('fs');

// Funktion för att skriva tillbaka blogPosts till filen
const writeBlogPostsToFile = (updatedPosts) => {
  const filePath = './src/data/blogData.js';
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Hitta början av blogPosts arrayen
  const startMarker = 'export const blogPosts = processAllArticlesSequential([';
  const startIndex = fileContent.indexOf(startMarker);
  
  if (startIndex === -1) {
    console.error('❌ Kunde inte hitta blogPosts arrayen i filen');
    return false;
  }
  
        // Hitta slutet av arrayen
      let braceCount = 0;
      let endIndex = startIndex;
      let inArrayForWriting = false;
      
      for (let i = startIndex; i < fileContent.length; i++) {
        if (fileContent[i] === '[') {
          braceCount++;
          inArrayForWriting = true;
        } else if (fileContent[i] === ']') {
          braceCount--;
          if (inArrayForWriting && braceCount === 0) {
            endIndex = i + 1;
            break;
          }
        }
      }
  
  // Skapa nytt innehåll för blogPosts arrayen
  const newArrayContent = updatedPosts.map(post => {
    let imageValue;
    if (typeof post.image === 'string') {
      if (post.image.includes('.webp')) {
        // Hantera WebP-bilder
        const imageName = post.image.split('/').pop().replace('.webp', '');
        imageValue = imageName;
      } else {
        // Hantera andra bilder
        imageValue = `"${post.image}"`;
      }
    } else {
      // Fallback
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

// Huvudfunktion för att fixa ID:n
const fixBlogIds = () => {
  try {
    // Läs blogData.js som text
    const filePath = './src/data/blogData.js';
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    console.log('📄 Läser innehåll från blogData.js...');
    
    // Hitta alla förekomster av "id: 1,"
    const id1Matches = fileContent.match(/id: 1,/g);
    if (id1Matches && id1Matches.length > 1) {
      console.log(`🔧 Hittade ${id1Matches.length} artiklar med ID 1 - fixar automatiskt...`);
      
      // Hitta alla artikel-block med en förbättrad regex som hittar ALLA artiklar
      const articleBlocks = [];
      
      // Först, hitta början av blogPosts arrayen
      const arrayStartMarker = 'export const blogPosts = processAllArticlesSequential([';
      const arrayStartIndex = fileContent.indexOf(arrayStartMarker);
      
      if (arrayStartIndex === -1) {
        console.error('❌ Kunde inte hitta blogPosts arrayen');
        return;
      }
      
      // Hitta slutet av arrayen
      let arrayBraceCount = 0;
      let arrayEndIndex = arrayStartIndex;
      let inArrayForParsing = false;
      
      for (let i = arrayStartIndex; i < fileContent.length; i++) {
        if (fileContent[i] === '[') {
          arrayBraceCount++;
          inArrayForParsing = true;
        } else if (fileContent[i] === ']') {
          arrayBraceCount--;
          if (inArrayForParsing && arrayBraceCount === 0) {
            arrayEndIndex = i;
            break;
          }
        }
      }
      
      // Extrahera innehållet mellan [ och ]
      const arrayContent = fileContent.substring(arrayStartIndex + arrayStartMarker.length, arrayEndIndex);
      
      // Hitta alla artikel-block i arrayen
      const articleRegex = /\{\s*id:\s*\d+,[\s\S]*?\n\s*\},?\s*(?=\{|$)/g;
      let match;
      
      while ((match = articleRegex.exec(arrayContent)) !== null) {
        articleBlocks.push({
          content: match[0],
          startIndex: match.index,
          endIndex: match.index + match[0].length
        });
      }
      
      console.log(`📝 Hittade ${articleBlocks.length} artiklar totalt`);
      
      if (articleBlocks.length === 0) {
        console.log('⚠️ Kunde inte hitta artikel-block. Använder alternativ metod...');
        
        // Alternativ metod: Hitta alla förekomster av "id: X,"
        const allIdMatches = fileContent.match(/id:\s*\d+,/g);
        console.log('📊 Alla ID:n som hittades:', allIdMatches);
        
        // Visa de första 500 tecknen för debugging
        console.log('🔍 Första 500 tecknen av filen:', fileContent.substring(0, 500));
        return;
      }
      
      // Hitta artiklar med ID 1
      const articlesWithId1 = articleBlocks.filter(block => 
        block.content.includes('id: 1,')
      );
      
      console.log('📝 Artiklar med ID 1:');
      articlesWithId1.forEach((article, index) => {
        const titleMatch = article.content.match(/title:\s*"([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : 'Okänd titel';
        console.log(`  ${index + 1}. ${title}`);
      });
      
      console.log('📋 Planerad omordning:');
      console.log(`  1. "${articlesWithId1[0].content.match(/title:\s*"([^"]+)"/)?.[1] || 'Okänd titel'}" (blir ID 1, latest: true)`);
      console.log(`  2. Alla andra artiklar flyttas nedåt (ID 2, 3, 4, etc.)`);
      
      // Ta den första artikeln med ID 1 som den nya (den som ska vara latest)
      const newArticle = articlesWithId1[0];
      
      // Hitta alla andra artiklar (inklusive den andra artikeln med ID 1)
      const otherArticles = articleBlocks.filter(block => 
        block !== newArticle // Exkludera bara den första artikeln med ID 1
      );
      
      // Sätt den nya artikeln först, sedan alla andra
      const reorderedArticles = [newArticle, ...otherArticles];
      
      // Säkerhetskontroll - säkerställ att vi inte förlorat några artiklar
      if (reorderedArticles.length !== articleBlocks.length) {
        console.error(`❌ FEL: Antal artiklar matchar inte! Fann ${articleBlocks.length} artiklar men har ${reorderedArticles.length} efter omordning.`);
        console.error('Detta skulle kunna leda till förlust av artiklar. Avbryter operationen.');
        return;
      }
      
      // Skapa nytt innehåll för blogPosts arrayen
      const newArrayContent = reorderedArticles.map((article, index) => {
        let articleContent = article.content;
        
        // Uppdatera ID
        articleContent = articleContent.replace(/id:\s*\d+,/, `id: ${index + 1},`);
        
        // Uppdatera latest flag
        if (index === 0) {
          articleContent = articleContent.replace(/latest:\s*(true|false),/, 'latest: true,');
        } else {
          articleContent = articleContent.replace(/latest:\s*(true|false),/, 'latest: false,');
        }
        
        return articleContent;
      }).join('\n');
      
      // Hitta början och slutet av blogPosts arrayen
      const startMarker = 'export const blogPosts = processAllArticlesSequential([';
      const startIndex = fileContent.indexOf(startMarker);
      
      if (startIndex === -1) {
        console.error('❌ Kunde inte hitta blogPosts arrayen');
        return;
      }
      
      // Hitta slutet av arrayen
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
      
      // Skapa nytt filinnehåll
      const newFileContent = fileContent.substring(0, startIndex) + 
        startMarker + '\n' + 
        newArrayContent + 
        '\n]);' + 
        fileContent.substring(endIndex + 1);
      
      // Skriv tillbaka till filen
      fs.writeFileSync(filePath, newFileContent, 'utf8');
      
      console.log('✅ ID-konflikter fixade automatiskt!');
      console.log('📝 Nyaste artikel (ID 1):', articlesWithId1[0].content.match(/title:\s*"([^"]+)"/)?.[1] || 'Okänd titel');
      console.log('📊 Totalt antal artiklar:', reorderedArticles.length);
      
    } else {
      console.log('✅ Inga ID-konflikter hittades. Alla artiklar har korrekt ID.');
    }
    
  } catch (error) {
    console.error('❌ Fel vid körning av scriptet:', error.message);
  }
};

// Kör scriptet
fixBlogIds(); 