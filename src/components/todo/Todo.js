import { React, useContext } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { useState } from "react";
import TodoList from "../todoList/TodoList";

export default function Todo() {
  const [errors, setErrors] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodoList((oldTodosList) => [todo, ...oldTodosList]);
      setTodo("");
    } else {
      setErrors("Add your todos and focus your goals");
    }
  };
  const handleForm = (e) => {
    let todoInput = e.target.value;
    if (e.target.value !== "") setErrors("");
    setTodo(todoInput);
  };
  const handleRemoveTodo = (todo) => {
    let filteredTodos = todoList.filter((element) => {
      return todo !== element;
    });
    setTodoList(filteredTodos);
  };
  return (
    <>
      <div className="container-fluid bg-info text-white py-3">
        <h1 className="text-center ">Todo Movie</h1>
        <Form className="container" onSubmit={(e) => addTodo(e)}>
          <Form.Group as={Col}>
            <Form.Label htmlFor="todo">Add New Movie</Form.Label>
            <Form.Control
              id="todo"
              name="todo"
              type="text"
              placeholder="Enter your movie todo"
              value={todo}
              onChange={(e) => handleForm(e)}
            />
            <p className="text-black"> {errors} </p>
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Add
          </Button>
        </Form>
      </div>
      {todoList.map((todo, index) => {
        return (
          <Container
            fluid="md"
            className="pt-2 text-center mx-auto"
            key={index}
          >
            <TodoList
              todo={todo}
              key={index}
              handleRemoveTodo={(e) => handleRemoveTodo(e, todo)}
            />
          </Container>
        );
      })}
    </>
  );
}
