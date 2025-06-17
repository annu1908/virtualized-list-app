import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search by title..."
      style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
    />
  );
}

export default SearchBar;