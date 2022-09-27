import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

const Home = () => {
  return (
    <>
    <h1>Please enter your expense for today</h1>
      <InputGroup className="mr-5">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="10.60"/>
      
        
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="coffee" />
      </InputGroup>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
        </tr>
        <tr>
          <td>2</td>
          
        </tr>
      
      </tbody>
    </Table>
    </>
  );
};

export default Home;
