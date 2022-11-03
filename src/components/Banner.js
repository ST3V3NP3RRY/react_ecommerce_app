import React from "react";
import BasketIcon from "./BasketIcon";
import styled from "styled-components";

const BannerHead = styled.div`
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const Banner = ({ basket }) => {
  return (
    <BannerHead>
      <h1>Amazin Music</h1>
      <BasketIcon basket={basket} />
    </BannerHead>
  );
};

export default Banner;
