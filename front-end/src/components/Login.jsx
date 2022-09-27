import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Home from "./Home";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Login = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isauth, setIsauth] = useState(
    localStorage.getItem(localStorage.getItem("isauth") || false)
  );
  const users = [{ name: "Puneet", password: "12345" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.name === name);
    if (account && account.password === password) {
      localStorage.setItem("isauth", true);
      navigate("/home");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="d-flex">
          <Form
            className="mt-3 w-50 justify-content-center"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
