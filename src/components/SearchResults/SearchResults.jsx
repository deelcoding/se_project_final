import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import { sampleArticles } from "../../utils/mockData";

const SearchResults = ({ isLoading, error, visibleCount, onShowMore }) => {
  const articles = sampleArticles;
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
