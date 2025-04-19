import "./SearchForm.css";

function SearchForm(onSearch) {
  return (
    <div className="main__search-bar">
      <input
        type="text"
        placeholder="Enter topic"
        className="main__search-bar_text"
      />
      <button
        className="main__search-button"
        onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
