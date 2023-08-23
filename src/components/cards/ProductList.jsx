import React, { useState } from 'react';
import Card from './card';
import productsData from './productsData.json';
import SearchBar from '../searchBar/SearchBar';


const ProductList = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <SearchBar onSearch={handleSearch} />
      <div className="cards-container">
        {filteredProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
