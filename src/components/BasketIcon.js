import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BasketIcon = ({ basket }) => {
  const CartLink = styled(Link)`
    color: white;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const BasketCounter = styled.div`
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2rem;
    left: 3.5rem;
  `;

  return (
    <CartLink to="/basket">
      <FontAwesomeIcon icon={faCartShopping} size="2x" />
      <BasketCounter>
        <h4>{basket.length}</h4>
      </BasketCounter>
    </CartLink>
  );
};

export default BasketIcon;
