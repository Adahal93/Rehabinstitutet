// Importera artiklar från det gamla systemet för nu
import { blogPosts as oldBlogPosts } from './blogData';

// Exportera artiklar från det gamla systemet
export const blogPosts = oldBlogPosts;

// Funktion för att hitta artikel efter ID
export const findArticleById = (id) => {
  return blogPosts.find(article => article.id === parseInt(id));
};

// Funktion för att fixa ID:n efter manuell ändring
export const fixIdsAfterManualChange = () => {
  // Denna funktion behöver inte göra något i denna version
  // eftersom artiklarna är statiska och bearbetas vid build-tid
  return blogPosts;
}; 