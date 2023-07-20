import React from "react";
import { Card } from "react-bootstrap";
import TodoListForm from "../Components/TodoListForm";
import ListOfToDoList from "../Components/ListOfToDoList";
function HomeScreen() {
  return (
    <>
      <h1 className="text-center text-info">To do list</h1>
      <Card>
        <Card.Header className="text-center">
          A todo list using react, redux
        </Card.Header>
        <TodoListForm/>
      </Card>
      <h1 className="text-info text-center">Your list</h1>
   <ListOfToDoList/>
    </>
  );
}

export default HomeScreen;
