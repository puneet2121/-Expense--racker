import React, { useState } from "react";
import './style/Card.css'
import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
function App() {
  const date = new Date(2022, 9, 27);

  return (
    <Card className="card">
    <ExpenseItem date={date}/>
  
    {/* <Navlink />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter> */}
    </Card>
  );
}

export default App;

