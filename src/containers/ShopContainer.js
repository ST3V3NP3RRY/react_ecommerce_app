import React, { useState, useEffect } from "react";
import ItemsList from "../components/ItemsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "../components/Basket";
import RubSoul from "../containers/images/The_Beatles_Rubber_Soul.webp";
import LedZepII from "../containers/images/Led_Zeppelin_Led_Zeppelin_II.webp";
import LaWoman from "../containers/images/The_Doors_L.A._Woman.jpg";

const ShopContainer = () => {
  const user1 = {
    name: "John Smith",
  };

  const shopItems = [
    {
      title: "Rubber Soul",
      artist: "The Beatles",
      type: "Record",
      price: 20,
      img: RubSoul,
    },
    {
      title: "Led Zeppelin II",
      artist: "Led Zeppellin",
      type: "Record",
      price: 15,
      img: LedZepII,
    },
    {
      title: "LA Woman",
      artist: "The Doors",
      type: "Compact Disc",
      price: 25,
      img: LaWoman,
    },
  ];

  const [user, setUser] = useState(user1);
  const [items, setItems] = useState(shopItems);
  const [basket, setBasket] = useState([]);

  const clickHandler = (item) => {
    const copyBasket = [...basket];
    copyBasket.push(item);
    setBasket(copyBasket);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ItemsList
                items={items}
                basket={basket}
                clickHandler={clickHandler}
              />
            }
          />
          <Route path="/basket" element={<Basket basket={basket} />} />
        </Routes>
      </Router>
    </>
  );
};

export default ShopContainer;
