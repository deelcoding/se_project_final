import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="main__search-bar">
      <input
        type="text"
        placeholder="Enter topic"
        className="main__search-bar_text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="main__search-button"
        onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
