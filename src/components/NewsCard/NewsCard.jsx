import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
  const user = useContext(CurrentUserContext);
  const isLoggedIn = !!user;

  return (
    <div className="card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="card__image"
      />
      <div className="card__details">
        <p className="card__date">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
        <p className="card__source">{article.source.name}</p>
      </div>
      <div
        className={`card__save ${isLoggedIn ? "active" : ""}`}
        title={isLoggedIn ? "Save article" : "Sign in to save articles"}>
        💾
      </div>
    </div>
  );
};

export default NewsCard;
