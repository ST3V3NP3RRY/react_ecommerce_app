import React from "react";
import ItemDetails from "./ItemDetails";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemList = ({ items, clickHandler }) => {
  const shopItems = items.map((item, index) => {
    return <ItemDetails key={index} item={item} clickHandler={clickHandler} />;
  });

  const Banner = styled.h1`
    background-color: darkblue;
    padding: 2rem;
    color: white;
    text-align: center;
  `;

  const ShopList = styled.ul`
    display: flex;
    gap: 2rem;
  `;

  return (
    <>
      <Banner>Music Shop</Banner>
      <ShopList>{shopItems}</ShopList>
      <Link to="/basket">View Basket</Link>
    </>
  );
};

export default ItemList;
