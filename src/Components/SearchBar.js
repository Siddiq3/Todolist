import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '16px'
      }}
    />
  );
};

export default SearchBar;
