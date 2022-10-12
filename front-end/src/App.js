import React, { useState } from "react";
import "./style/Card.css";
import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
import NewExpense from "./components/NewExpense";
function App() {
  const expenses = [
    {
      id: 1,
      title: "rent",
      amount: 450,
      date: new Date(2022, 9, 27),
    },
    { id: 2, title: "groceries", amount: 120, date: new Date(2022, 8, 20) },
  ];

  return (
    <Card className="card">
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />

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
