import React, { useState } from "react";
import "./style/Card.css";
import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
import NewExpense from "./components/NewExpense";


const allExpenses = [
  {
    id: 1,
    enteredTitle: "rent",
    enteredAmount: 450,
    enteredDate: new Date(2022, 9, 27),
  },
  { id: 2, enteredTitle: "groceries", enteredAmount: 120, enteredDate: new Date(2022, 8, 20) },
];
function App() {
  const [expenses,setExpenses] = useState(allExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      console.log(expense)
      return  [expense, ...prev];
    });
  };
  return (
    <Card className="card">
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.enteredTitle}
          amount={expense.enteredAmount}
          date={expense.enteredDate}
        />
      ))}

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
