import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
const Login = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    <Route exact path="/">
      {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
    </Route>;
  };
  return (
    <>
      <div className="container ">
        <div className="d-flex">
          <Form className="mt-3 w-50 justify-content-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={handleClick} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
