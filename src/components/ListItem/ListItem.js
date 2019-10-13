import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const useEditCompleted = (id, boolean) => {
  fetch(`/api/completed/${id}/${boolean}`).catch(e => console.log(e));
};

const ListItem = props => {
  const [checkboxColour, setCheckboxColour] = useState(props.completed);
  const [tasksCompleted, setTasksCompleted] = useState(props.tasksCompleted);
  return (
    <ListItemContainer>
      <ListItemElement>
        <div>
          <Title>Title: {props.title}</Title>
          <Title>
            {props.identification} of {props.list.total}
          </Title>
        </div>
        <StyledCheckbox
          style={
            checkboxColour
              ? { backgroundColor: "green" }
              : { backgroundColor: "white" }
          }
          onClick={() => {
            useEditCompleted(props.identification, !checkboxColour);
            setCheckboxColour(!checkboxColour);
          }}
        >
          {checkboxColour && (
            <StyledTick src="https://icon-library.net/images/tick-icon-png/tick-icon-png-2.jpg" />
          )}
        </StyledCheckbox>
      </ListItemElement>
    </ListItemContainer>
  );
};

export default connect(state => state)(ListItem);

const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
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
