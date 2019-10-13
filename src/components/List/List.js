import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ListItem from "../ListItem/ListItem";
import fetch from "isomorphic-fetch";

const completedTasks = response => {
  const totalCompleted = response.filter(x => x.completed === true).length;
  return totalCompleted;
};

const reverseData = response => {
  return response.sort(function(a, b) {
    return b.id - a.id;
  });
};

const List = props => {
  const [response, setResponse] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState(null);
  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(res => {
        props.dispatch({
          type: "TOTAL_COUNT",
          payload: res.length
        });
        setTasksCompleted(completedTasks(res));
        reverseData(res);
        setResponse(res);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Subheading>{props.list.total} results</Subheading>
      <Subheading>
        {tasksCompleted}/{props.list.total} completed
      </Subheading>
      <UnorderedList>
        {response.map(x => (
          <ListItem
            key={x.id}
            completed={x.completed}
            identification={x.id}
            title={x.title}
            tasksCompleted={tasksCompleted}
          />
        ))}
      </UnorderedList>
    </>
  );
};

export default connect(state => state)(List);

const Subheading = styled.h2`
  font-style: italic;
`;

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;
