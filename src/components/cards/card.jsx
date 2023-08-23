import React from 'react';
import PropTypes from 'prop-types';
import images from './Images';
import '../../styles/card.scss';

const Card = ({ product }) => {
  const { title, imgKey, description, price } = product;

  const handleBuyClick = () => {
    console.log(`Compraste: ${title}`);
  };

  const descriptionLines = description.split('\n');

  return (
    <div className="card">
      <img src={images[imgKey]} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <ul className="card-description">
        {descriptionLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <p className="card-price">{price}</p>
      <button className="buy-button" onClick={handleBuyClick}>
        Comprar
      </button>
    </div>
  );
};
export default Card;