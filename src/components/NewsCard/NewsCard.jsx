import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NewsCard.css";
import bookmarkUnmarked from "../../assets/bookmark_unmarked.png";
import bookmarkActive from "../../assets/bookmark_active.png";
import trashIcon from "../../assets/trash.png";

const NewsCard = ({ article, isSaved, onSave, onDelete, isSavedPage }) => {
  if (!article) return null;
  const user = useContext(CurrentUserContext);
  const isLoggedIn = !!user;

  const handleClick = () => {
    if (isSavedPage) {
      onDelete(article);
    } else {
      onSave(article);
    }
  };

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
        {!isLoggedIn && !isSavedPage && (
          <div className="card__tooltip">Sign in to save articles</div>
        )}
        <div onClick={handleClick}>
          <img
            src={
              isSavedPage
                ? trashIcon
                : isSaved
                ? bookmarkActive
                : bookmarkUnmarked
            }
            alt={isSavedPage ? "Delete article" : "Save article"}
            className="card__save-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
