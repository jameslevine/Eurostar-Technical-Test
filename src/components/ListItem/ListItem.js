import React from "react";
import styled from "styled-components";

const ListItem = props => {
  return (
    <ListItemContainer>
      <ListItemElement>
        <Title>Title: {props.title}</Title>
        <Title>Task ID: {props.identification}</Title>
      </ListItemElement>
    </ListItemContainer>
  );
};

export default ListItem;

const Title = styled.h3`
  font-weight: 600;
  margin: 0;
`;

const ListItemElement = styled.li`
  list-style: none;
`;

const ListItemContainer = styled.div`
  border: 1px solid black;
  padding: 1px;
  margin: 1em 0;
`;
