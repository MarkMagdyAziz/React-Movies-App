import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import "./style.css";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be more than 6 characters ";
  }
  return errors;
};
const Login = (props) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mt-2 w-50">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold" htmlFor="email">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password" className="fw-bold">
            Password
          </Form.Label>

          <Form.Control
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
          />
          <Button
            variant="danger"
            type="button"
            className="btn btn-sm"
            onClick={handleClickShowPassword}
          >
            Show/Hide
          </Button>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </Form.Group>

        <Button variant="primary" type="submit" className="text-center">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
