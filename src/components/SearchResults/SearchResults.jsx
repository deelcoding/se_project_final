import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const SearchResults = ({
  articles,
  isLoading,
  error,
  visibleCount,
  onShowMore,
}) => {
  if (isLoading) return <div className="preloader">Loading...</div>;
  if (error) return <div className="search-error">{error}</div>;
  if (!articles.length) return null;

  return (
    <section className="search-results">
      <div className="card-list">
        {articles.slice(0, visibleCount).map((article, i) => (
          <NewsCard
            key={i}
            article={article}
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
