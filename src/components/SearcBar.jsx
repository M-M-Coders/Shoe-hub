import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ shoeData, onSearch }) {
 const [searchQuery, setSearchQuery] = useState('');

 const handleSearch = (query) => {
    const filteredResults = shoeData.filter((item) =>
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    onSearch(filteredResults); // Pass the filtered results to the parent component
 };

 return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar-input"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
 );
}

export default SearchBar;