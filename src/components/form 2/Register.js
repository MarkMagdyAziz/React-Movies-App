import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const changeDetails = (e) => {
    if (e.target.name === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });
      if (e.target.value.length < 4) {
        setErrors({
          ...errors,
          name: "Invalid name should be more than 3 characters",
        });
      } else {
        setErrors({
          ...errors,
          name: "",
        });
      }
    } else if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setErrors({
          ...errors,
          email: "Invalid email address",
        });
      } else {
        setErrors({
          ...errors,
          email: "",
        });
      }
    } else if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      if (/\s/g.test(e.target.value)) {
        setErrors({
          ...errors,
          username: "Don't use white space ",
        });
      } else {
        setErrors({
          ...errors,
          username: "",
        });
      }
    } else if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      if (
        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
          e.target.value
        )
      ) {
        setErrors({
          ...errors,
          password:
            " You strong Password min 8 letter password, with at least a symbol, upper and lower case letters and a number",
        });
      } else {
        setErrors({
          ...errors,
          password: "",
        });
      }
    } else if (e.target.name === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: e.target.value,
      });
      if (userForm.password !== userForm.confirmPassword) {
        setErrors({
          ...errors,
          confirmPassword: "confirmed password doesn't match your password",
        });
      } else {
        setErrors({
          ...errors,
          confirmPassword: "",
        });
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(Object.values(userForm));
  };
  return (
    <Form className="container" onSubmit={(e) => submitForm(e)}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter Name"
            value={userForm.name}
            onChange={(e) => changeDetails(e)}
          />
          <p className="text-danger"> {errors.name} </p>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            placeholder="mk@gmail.com"
            type="email"
            name="email"
            value={userForm.email}
            onChange={(e) => changeDetails(e)}
          />
          <p className="text-danger"> {errors.email} </p>
        </Form.Group>
      </Row>
      <Form.Group as={Col}>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          id="username"
          name="username"
          placeholder="Username"
          value={userForm.username}
          onChange={(e) => changeDetails(e)}
        />
        <p className="text-danger"> {errors.username} </p>
      </Form.Group>
      <Form.Group className="mb-3 mt-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={userForm.password}
          onChange={(e) => changeDetails(e)}
        />
        <p className="text-danger"> {errors.password} </p>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label id="confirmPassword">Confirm Password</Form.Label>
        <Form.Control
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={userForm.confirmPassword}
          onChange={(e) => changeDetails(e)}
        />

        <p className="text-danger"> {errors.confirmPassword} </p>
      </Form.Group>
      <Button
        disabled={errors.name || errors.email || errors.confirmPassword}
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
