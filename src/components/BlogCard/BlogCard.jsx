import React from "react";
import "./BlogCard.css";

const BlogCard = ({ title, image, text, onClick }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="blog-card" onClick={onClick}>
      <img src={image} alt={title} className="blog-card__image" />
      <div className="blog-card__content">
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__text">{truncateText(text, 100)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
