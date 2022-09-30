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
  const [data, setData] = useState([
    {
      item: [],
      price: "",
    },
  ]);
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([]);
  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setState({ ...state, [name]: value });
  };
  console.log(items);
  const handleClick = (e) => {
    e.preventDefault();
    setItems((current) => [state.item, ...current]);
    setPrices((current) => [state.price, ...current]);
    console.log(items);
    setData([
      {
        ...state,
        item: state.item,
        items: items,
        price: state.price,
        prices: prices,
      },
    ]); // Using data for onSubmit handler
  };

  data.map((el, id) => {
    console.log(el, id);
  });
  
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
        
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        
        
        
            {prices.map((el,id) => {
              return<>
              <tr>
              <td>{id + 1}</td>
              <td>{el}</td>
              <td>{data.item}</td>
              </tr>
            </>
            })}
               
              
          
       
      </Table>
    </>
  );
};

export default Home;
