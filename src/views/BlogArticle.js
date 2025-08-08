import React, { useState, useEffect } from 'react';
import './BlogArticle.css';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, fixIdsAfterManualChange } from '../data/markdownArticles';
import DOMPurify from 'dompurify';

const BlogArticle = () => {
  const { id } = useParams();
  const [processedPosts, setProcessedPosts] = useState([]);
  
  useEffect(() => {
    const fixedPosts = fixIdsAfterManualChange();
    setProcessedPosts(fixedPosts);
  }, []);
  
  const article = processedPosts.find(post => post.id === parseInt(id));

  if (!article) {
    return (
      <div className="blog-article-not-found">
        <div className="blog-container">
          <h1>Artikel hittades inte</h1>
          <p>Den artikel du letar efter finns inte.</p>
          <Link to="/blog" className="back-to-blog-btn">Tillbaka till bloggen</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-article-page">
      <article className="blog-article">
        <div className="blog-article-header">
          <div className="blog-container">
            <div className="blog-article-meta">
              <span className="blog-category">{article.category}</span>
              <span className="blog-article-date">{formatDate(article.date)}</span>
            </div>
            
            <h1 className="blog-article-title">{article.title}</h1>
            
            <div className="blog-article-author">
              <div className="author-info">
                <span className="author-name">{article.author}</span>
                <span className="author-title">{article.authorTitle}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="blog-article-content">
          <div className="blog-container">
            <div 
              className="blog-article-body"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
            />
            
            <div className="blog-article-footer">
              <hr className="blog-article-divider" />
              
              <div className="blog-article-tags">
                <span className="tags-label">Taggar:</span>
                {article.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
              
              <div className="blog-article-author-footer">
                <strong>Skriven av {article.author}, {article.authorTitle}</strong>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="blog-article-navigation">
        <div className="blog-container">
          <Link to="/blog" className="back-to-blog-btn">
            ← Tillbaka till bloggen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 