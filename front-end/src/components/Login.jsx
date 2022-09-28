import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Name: "",
    Password: "",
  });
console.log(input)
  const getUserData = (e) => {
    
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('userdata');
    const {Name, Password} = input;
    if(user && user.length) {
      const userData = JSON.parse(user);
  
      const userLogin = userData.filter((el,k) => {
        return el.Name === Name && el.Password === Password
      });
      console.log(userLogin)
      if(userLogin.length === 0) {
        alert('invalid details')
      } else { 
        console.log('user login successful')
        localStorage.setItem("user_login",JSON.stringify(user))
        navigate("/home");
      }
    }
  //   const account = users.find((user) => user.name === name);
  //   if (account && account.password === password) {
  //     localStorage.setItem("isauth", true);
  //     navigate("/home");
  //   }
  };
  return (
    <>
      <div className="container ">
        <div className="d-flex">
          <Form
            className="mt-3 w-50 justify-content-center"
            
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="Name"
                onChange={getUserData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                onChange={getUserData}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
