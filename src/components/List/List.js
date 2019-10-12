import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import fetch from "isomorphic-fetch";

const List = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setResponse(res);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <UnorderedList>
      {response.map(x => (
        <ListItem key={x.id} identification={x.id} title={x.title} />
      ))}
    </UnorderedList>
  );
};

export default List;

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;
