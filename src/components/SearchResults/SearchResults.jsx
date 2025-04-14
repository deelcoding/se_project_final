import React from "react";
import "./SearchResults.css";

function SearchResults() {
  return (
    <section className="search-results">
      <h2>Search results</h2>
      <div className="card-grid">
        {/* You can dynamically map results here later */}
        <div className="card">Result 1</div>
        <div className="card">Result 2</div>
        <div className="card">Result 3</div>
      </div>
      <button className="show-more">Show more</button>
    </section>
  );
}

export default SearchResults;
