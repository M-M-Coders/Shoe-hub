import React from 'react'
import '../styles/SearchBar.css'

function SearchBar() {
 return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." className="search-bar-input" />
    </div>
 )
}

export default SearchBar