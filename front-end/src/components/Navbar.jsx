import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navlink = () => {
  const user = localStorage.getItem('userdata')
  console.log(user)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/signup">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navlink;
