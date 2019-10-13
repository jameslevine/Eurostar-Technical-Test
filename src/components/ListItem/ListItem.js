import React, { useState } from "react";
import styled from "styled-components";

const ListItem = props => {
  const [checkboxColour, setCheckboxColour] = useState(props.completed);
  return (
    <ListItemContainer>
      <ListItemElement>
        <div>
          <Title>Title: {props.title}</Title>
          <Title>Task ID: {props.identification}</Title>
        </div>
        <StyledCheckbox
          style={
            checkboxColour
              ? { backgroundColor: "green" }
              : { backgroundColor: "white" }
          }
          onClick={() => setCheckboxColour(!checkboxColour)}
        >
          {checkboxColour && (
            <StyledTick src="https://icon-library.net/images/tick-icon-png/tick-icon-png-2.jpg" />
          )}
        </StyledCheckbox>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const ListItemContainer = styled.div`
  border: 1px solid black;
  padding: 1px;
  margin: 1em 0;
`;

const StyledCheckbox = styled.div`
  border: 1px solid black;
  background-color: white;
  width: 40px;
  height: 40px;
  font-size: 40px;
  text-align: center;
`;

const StyledTick = styled.img`
  height: 30px;
  width: 30px;
`;
