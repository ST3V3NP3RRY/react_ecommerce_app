import React, { useState, useEffect } from "react";
import ItemsList from "../components/ItemsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "../components/Basket";

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
    },
    {
      title: "Led Zeppelin II",
      artist: "Led Zeppellin",
      type: "Record",
      price: 15,
    },
    {
      title: "LA Woman",
      artist: "The Doors",
      type: "Compact Disc",
      price: 25,
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
            element={<ItemsList items={items} clickHandler={clickHandler} />}
          />
          <Route path="/basket" element={<Basket basket={basket} />} />
        </Routes>
      </Router>
    </>
  );
};

export default ShopContainer;
