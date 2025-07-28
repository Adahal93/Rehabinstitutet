const fs = require('fs');
const path = require('path');

// Funktion för att läsa alla Markdown-filer
const readMarkdownFiles = () => {
  const articlesDir = './src/content/articles';
  const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.md'));
  
  const articles = [];
  
  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const lines = frontmatter.split('\n');
      const metadata = {};
      
      lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          let value = valueParts.join(':').trim();
          
          // Hantera arrays (tags)
          if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/"/g, ''));
          }
          
          // Hantera strings med citattecken
          if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
          
          metadata[key.trim()] = value;
        }
      });
      
      articles.push({
        file,
        filePath,
        content,
        metadata
      });
    }
  });
  
  return articles;
};

// Funktion för att skriva tillbaka till fil
const writeMarkdownFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
};

// Funktion för att fixa ID:n
const fixMarkdownIds = () => {
  try {
    console.log('🔍 Läser Markdown-filer...');
    const articles = readMarkdownFiles();
    
    if (articles.length === 0) {
      console.log('❌ Inga Markdown-filer hittades i src/content/articles/');
      return;
    }
    
    console.log(`📁 Hittade ${articles.length} artiklar`);
    
    // Kontrollera om det finns artiklar med "NY" som ID
    const newArticles = articles.filter(article => article.metadata.id === "NY");
    const oldArticles = articles.filter(article => article.metadata.id !== "NY");
    
    if (newArticles.length === 0) {
      console.log('✅ Inga nya artiklar (id: "NY") hittades. Alla artiklar har korrekt ID.');
      return;
    }
    
    console.log(`🆕 Hittade ${newArticles.length} nya artiklar som behöver ID`);
    
    // Sortera artiklar: nya först, sedan gamla
    const allArticles = [...newArticles, ...oldArticles];
    
    // Uppdatera ID:n och latest-flaggan
    allArticles.forEach((article, index) => {
      const newId = index + 1;
      const isLatest = index === 0;
      
      console.log(`📝 Uppdaterar ${article.file}: ID ${article.metadata.id} → ${newId}, latest: ${isLatest}`);
      
      // Uppdatera frontmatter
      let updatedContent = article.content;
      
      // Uppdatera ID
      updatedContent = updatedContent.replace(
        /^id: .*$/m,
        `id: ${newId}`
      );
      
      // Uppdatera latest
      updatedContent = updatedContent.replace(
        /^latest: .*$/m,
        `latest: ${isLatest}`
      );
      
      // Skriv tillbaka till fil
      writeMarkdownFile(article.filePath, updatedContent);
    });
    
    console.log('✅ Alla ID:n har uppdaterats!');
    console.log(`📊 Nyaste artikel (ID 1): ${allArticles[0].metadata.title}`);
    console.log(`📊 Totalt antal artiklar: ${allArticles.length}`);
    
  } catch (error) {
    console.error('❌ Fel vid körning av scriptet:', error.message);
  }
};

// Kör scriptet
fixMarkdownIds(); 