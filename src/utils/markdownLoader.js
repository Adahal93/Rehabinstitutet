import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Funktion för att beräkna lästid baserat på antal ord
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

// Funktion för att extrahera text från HTML för ordräkning
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

// Funktion för att konvertera Markdown till HTML
const markdownToHtml = async (markdown) => {
  const result = await remark()
    .use(html)
    .process(markdown);
  return result.toString();
};

// Funktion för att ladda en artikel från Markdown-fil
export const loadArticle = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const markdown = await response.text();
    
    // Parse frontmatter och content
    const { data, content } = matter(markdown);
    
    // Konvertera Markdown till HTML
    const htmlContent = await markdownToHtml(content);
    
    // Beräkna lästid
    const plainText = extractTextFromHTML(htmlContent);
    const readTime = calculateReadingTime(plainText);
    
    return {
      ...data,
      content: htmlContent,
      readTime,
      excerpt: data.excerpt || content.substring(0, 150) + '...'
    };
  } catch (error) {
    console.error('Fel vid laddning av artikel:', error);
    return null;
  }
};

// Funktion för att ladda alla artiklar
export const loadAllArticles = async () => {
  try {
    // I en riktig implementation skulle vi här läsa alla .md filer från mappen
    // För nu returnerar vi en tom array som kommer att fyllas med artiklar
    return [];
  } catch (error) {
    console.error('Fel vid laddning av artiklar:', error);
    return [];
  }
};

// Funktion för att hitta artikel efter ID
export const findArticleById = async (id) => {
  try {
    // I en riktig implementation skulle vi här söka efter rätt fil baserat på ID
    const filePath = `/src/content/articles/article-${id}.md`;
    return await loadArticle(filePath);
  } catch (error) {
    console.error('Fel vid sökning av artikel:', error);
    return null;
  }
}; 