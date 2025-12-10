import React, { useState } from "react";
import axios from "axios";

import "../Css/Search.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?q=${query}`
      );
      setResults(res.data);
      setShowDropdown(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setShowDropdown(false);
    setResults([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search subject or book..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {showDropdown && results.length > 0 && (
        <div className="search-data">
          <div>
            <button className="search-close" onClick={handleClose}>
              {" "}
              ×{" "}
            </button>
          </div>

          {results.map((item, index) => (
            <div key={index} className="search-buttons">
              <span>
                {item.subject} : {item.name}
              </span>
              <a href={item.link} className="search-button">
                <button className="search-open">Open</button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
