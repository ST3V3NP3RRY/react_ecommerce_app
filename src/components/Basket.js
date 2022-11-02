import React from "react";
import { Link } from "react-router-dom";

const Basket = ({ basket }) => {
  const basketItems = basket.map((item, index) => {
    return (
      <li key={index}>
        <h2>{item.title}</h2>
        <h3>{item.artist}</h3>
        <h2>£{item.price}</h2>
      </li>
    );
  });

  return (
    <>
      <h1>You have {basket.length} items in your basket</h1>
      <ul>{basketItems}</ul>
      <Link to="/">Home</Link>
    </>
  );
};

export default Basket;
