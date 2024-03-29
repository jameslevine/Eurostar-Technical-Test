import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import List from "./components/List/List";

const App = () => {
  return (
    <Container>
      <Title>Eurostar To-do List</Title>
      <List />
    </Container>
  );
};

export default hot(module)(App);

const Container = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
`;
