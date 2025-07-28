import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import { Link } from 'react-router-dom';
import { blogPosts, fixIdsAfterManualChange } from '../data/blogData';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [processedPosts, setProcessedPosts] = useState([]);
  
  // Kör automatisk ID-fixning när komponenten laddas
  useEffect(() => {
    const fixedPosts = fixIdsAfterManualChange();
    setProcessedPosts(fixedPosts);
  }, []);
  
  const postsPerPage = 8;
  const totalPages = Math.ceil(processedPosts.length / postsPerPage);

  // Get featured posts (latest + 3 featured)
  const latestPost = processedPosts.find(post => post.latest);
  const featuredPosts = processedPosts.filter(post => post.featured && !post.latest).slice(0, 3);

  // Get posts for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = processedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-hero-main">
            {latestPost && (
              <Link to={`/blog/${latestPost.id}`} className="blog-hero-link">
                <article className="blog-hero-article">
                  <div className="blog-hero-image">
                    <img src={latestPost.image} alt={latestPost.title} />
                  </div>
                  <div className="blog-hero-text">
                    <span className="blog-date">{formatDate(latestPost.date)}</span>
                    <h1 className="blog-hero-title">{latestPost.title}</h1>
                    <p className="blog-hero-excerpt">{latestPost.excerpt}</p>
                  </div>
                </article>
              </Link>
            )}
          </div>
          
          <div className="blog-featured-sidebar">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-featured-link">
                <article className="blog-featured-article">
                  <div className="blog-featured-content">
                    <span className="blog-category">{post.category}</span>
                    <h3 className="blog-featured-title">{post.title}</h3>
                    <span className="blog-date">{formatDate(post.date)}</span>
                    <span className="blog-author">{post.author}</span>
                  </div>
                  <div className="blog-featured-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="blog-all-articles">
        <div className="blog-container">
          <h2 className="blog-section-title">Alla artiklar</h2>
          
          <div className="blog-grid">
            {currentPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-card-link">
                <article className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <div className="blog-card-meta">
                      <span className="blog-date">{formatDate(post.date)}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="blog-pagination">
            <button 
              className="pagination-arrow"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {totalPages > 5 && (
                <>
                  <span className="pagination-ellipsis">...</span>
                  <button
                    className={`pagination-number ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>
            
            <button 
              className="pagination-arrow"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 