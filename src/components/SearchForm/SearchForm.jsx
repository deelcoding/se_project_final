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
    <form className="main__search-bar">
      <input
        type="text"
        placeholder="Enter topic"
        className="main__search-bar_text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="main__search-button"
        onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
