import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const Home = () => {
  const [state, setState] = useState({
    item: "",
    price: "",
  });
  // Setting up another data for the storage purpose so I can use this to use OnSubmit
  const [data, setData] = useState([{
    item: "",
    price: "",
  }]);
  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setState({ ...state, [name]: value });
  };


  const handleClick = (e) => {
    e.preventDefault();
    
    setData([{ ...state, item: state.item, price: state.price }]); // Using data for onSubmit handler
  };
  data.map((el,id) => {
    console.log(el,id)
  })
  return (
    <>
      <h1>Please enter your expense for today</h1>
      <InputGroup className="ml-5">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control
          aria-label="Dollar amount (with dot and two decimal places)"
          name="price"
          value={state.price}
          onChange={getData}
          placeholder="10.60"
        />
        <Form.Control
          aria-label="item"
          name="item"
          value={state.item}
          onChange={getData}
          placeholder="coffee"
        />
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </InputGroup>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
       { data.map((element,id) => {
        console.log('DATAR',element)
          return <> 
          <tr>
            <td>{id + 1}</td>
          <td>{element.item}</td>
          <td>{element.price}</td>
          </tr>
          
          </>
        })
      }
      </tbody>
        
      </Table>
    </>
  );
};

export default Home;
