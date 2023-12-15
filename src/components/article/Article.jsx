import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="cs__blog-container_article">
      <div className="cs__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="cs__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
