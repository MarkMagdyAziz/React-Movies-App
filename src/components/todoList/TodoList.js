import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

export default function TodoList(props) {
  const { todo, handleRemoveTodo } = props;

  function wrapHandleClick(event) {
    handleRemoveTodo(todo);
  }
  return (
    <Container fluid="md" className="pt-2 min-vh-100">
      <Row>
        <Col>
          <Row>
            <Col xs={6}>
              <h1>{todo}</h1>
            </Col>
            <Col xs={6}>
              <Button
                variant="danger"
                size="sm"
                onClick={wrapHandleClick}
                className="mt-2"
              >
                Remove
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
