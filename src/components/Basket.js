import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import styled from "styled-components";

const Basket = ({ basket }) => {
  // eslint-disable-next-line no-unused-vars
  const ListItem = styled.li`
    list-style-type: none;
  `;

  const basketItems = basket.map((item, index) => {
    return (
      <ListItem key={index}>
        <img src={item.img} alt="" width="200" height="200" />
        <h2>{item.title}</h2>
        <h3>{item.artist}</h3>
        <h2>£{item.price}</h2>
      </ListItem>
    );
  });

  return (
    <>
      <Banner basket={basket} />
      <h2>You have {basket.length} items in your basket</h2>
      <ul>{basketItems}</ul>
      <Link to="/">Home</Link>
    </>
  );
};

export default Basket;
