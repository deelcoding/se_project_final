import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SavedNews = ({ savedArticles, onDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved-news">
      <Header />
      <section className="saved-news__articles">
        <p className="saved-news__header">Saved articles</p>
        <p className="saved-news__title">
          {currentUser.name}, you have "#" saved articles
        </p>
        <p className="saved-news__tags">
          By keywords: <span className="saved-news__keywords"></span>{" "}
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
