import React from "react";
import ItemDetails from "./ItemDetails";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemList = ({ items, clickHandler, basket }) => {
  const shopItems = items.map((item, index) => {
    console.log(item.img);
    return <ItemDetails key={index} item={item} clickHandler={clickHandler} />;
  });

  const ShopList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  `;

  return (
    <>
      <Banner basket={basket} />
      <ShopList>{shopItems}</ShopList>
      <Link to="/basket">View Basket</Link>
    </>
  );
};

export default ItemList;
