import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SavedNews = ({ savedArticles, onDelete }) => {
  const currentUser = useContext(CurrentUserContext);
  const keywordFrequency = savedArticles.reduce((acc, article) => {
    if (!article.keyword) return acc;
    acc[article.keyword] = (acc[article.keyword] || 0) + 1;
    return acc;
  }, {});

  const sortedKeywords = Object.entries(keywordFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword);

  return (
    <div className="saved-news">
      <Header />
      <section className="saved-news__articles">
        <p className="saved-news__header">Saved articles</p>
        <p className="saved-news__title">
          {currentUser.name}, you have {savedArticles.length} saved article
          {savedArticles.length !== 1 ? "s" : ""}
        </p>
        <p className="saved-news__tags">
          By keywords:{" "}
          <span className="saved-news__keywords">
            {sortedKeywords.length === 0 && ""}
            {sortedKeywords.length === 1 && sortedKeywords[0]}
            {sortedKeywords.length === 2 &&
              `${sortedKeywords[0]}, ${sortedKeywords[1]}`}
            {sortedKeywords.length > 2 &&
              `${sortedKeywords[0]}, ${sortedKeywords[1]}, and ${
                sortedKeywords.length - 2
              } other`}
          </span>
        </p>
      </section>
      <div className="saved-news__cards">
        {savedArticles.map((article) => (
          <NewsCard
            key={article._id || article.url}
            article={article}
            isSavedPage={true}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedNews;
