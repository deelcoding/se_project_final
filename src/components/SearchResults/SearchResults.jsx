import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const SearchResults = ({
  articles,
  isLoading,
  error,
  visibleCount,
  onShowMore,
}) => {
  if (isLoading) return <Preloader />;
  if (!articles || articles.length === 0) return <NotFound />;

  return (
    <section className="search-results">
      <div className="card-list">
        {articles.slice(0, visibleCount).map((article, i) => (
          <NewsCard
            key={i}
            article={article}
            isSaved={savedArticles.some((a) => a.url === article.url)}
            onSave={() => handleSave(article)}
          />
        ))}
      </div>
      {visibleCount < articles.length && (
        <button
          className="show-more-btn"
          onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
};

export default SearchResults;
