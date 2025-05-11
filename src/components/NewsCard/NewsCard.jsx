import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NewsCard.css";
import defaultImage from "../../assets/notfound.png";

const NewsCard = ({ article }) => {
  if (!article) return null;
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
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
        <p className="card__source">{article.source.name}</p>
      </div>

      <div className="card__save-container">
        {!isLoggedIn && (
          <div className="card__tooltip">Sign in to save articles</div>
        )}
        <div
          className={`card__save ${isLoggedIn ? "active" : ""}`}
          title={isLoggedIn ? "Save article" : ""}
        />
      </div>
    </div>
  );
};

export default NewsCard;
