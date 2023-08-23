import React from "react";
import App from "./App";
import Card from './components/cards/card.jsx';
import './styles/card.scss';
import ProductList from "./components/cards/ProductList";

const Inicio = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Inicio;
