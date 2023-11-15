import React, { useState } from 'react';
import '../styles/SearchBar.css';

const shoeData = [
  // ... (your shoe data here)
];

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(shoeData);

  const handleSearch = (query) => {
    const filteredResults = shoeData.filter((item) =>
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
    setSearchQuery(query);
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
      {/* Render your filtered data here */}
      {filteredData.map((item) => (
        <div key={item.id}>
          {/* Display your shoe item */}
          <img src={item.image} alt={item.category} />
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
