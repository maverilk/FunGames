import React, { useState } from 'react';
import '../../styles/SearchBar.scss'

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Buscar productos..."
      />
      <button type='reset'/>
    </div>
  );
};

export default SearchBar;
