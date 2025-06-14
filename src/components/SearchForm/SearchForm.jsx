import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      className="search__search-bar"
      onSubmit={handleSubmit}>
      <div className="search__input-wrapper">
        <input
          type="text"
          placeholder="Enter topic"
          className="search__search-bar_text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="search__button-wrapper">
        <button
          type="submit"
          className="search__search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
