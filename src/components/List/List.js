import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import fetch from "isomorphic-fetch";

const completedTasks = response => {
  return response.filter(x => x.completed === true).length;
};

const List = () => {
  const [response, setResponse] = useState([]);
  const [objectLength, setObjectLength] = useState(null);
  const [tasksCompleted, setTasksCompleted] = useState(null);
  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(res => {
        setObjectLength(res.length);
        setTasksCompleted(completedTasks(res));
        setResponse(res);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Subheading>{objectLength} results</Subheading>
      <Subheading>{tasksCompleted} completed tasks</Subheading>
      <UnorderedList>
        {response.map(x => (
          <ListItem key={x.id} identification={x.id} title={x.title} />
        ))}
      </UnorderedList>
    </>
  );
};

export default List;

const Subheading = styled.h2`
  font-style: italic;
`;

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;
