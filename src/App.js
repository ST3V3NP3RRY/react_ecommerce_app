import React from "react";
import ShopContainer from "./containers/ShopContainer";
import styled from "styled-components";
import "./App.css";

function App() {
  const Container = styled.div`
    background-color: #eee;
    height: 100vh;
    margin: 0;
  `;

  return (
    <Container>
      <ShopContainer />
    </Container>
  );
}

export default App;
