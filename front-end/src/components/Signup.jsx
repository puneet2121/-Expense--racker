import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Signup = () => {
  const [inputValue,setInputValue] = useState({
    Name:'',
    Email:'',
    Password:''
  });
  console.log(inputValue);
  const getUserData = (e) => {
    const {value,name} = e.target
    setInputValue(() => {
      return {
        ...inputValue,
        [name]:value
      }
    })
  }
  return (
    <div className="d-flex justify-content-center">
      <Form className="mt-3 w-50 justify-content-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='Name' onChange={getUserData} placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='Email' onChange={getUserData} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="Password" onChange={getUserData} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
