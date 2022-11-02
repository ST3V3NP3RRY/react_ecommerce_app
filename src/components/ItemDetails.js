import React from "react";
import styled from "styled-components";

const ItemDetails = ({ item, clickHandler }) => {
  const ShopItem = styled.div`
    background-color: white;
    padding: 2rem;
    width: 12rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;

  const Button = styled.button`
    background-color: darkblue;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 0.5rem;
  `;

  return (
    <ShopItem>
      <h2>{item.title}</h2>
      <h2>{item.artist}</h2>
      <h2>£{item.price}</h2>
      <Button onClick={() => clickHandler(item)}>Add to basket</Button>
    </ShopItem>
  );
};

export default ItemDetails;
