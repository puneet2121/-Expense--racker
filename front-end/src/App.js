import React, { useState } from "react";
import "./style/Card.css";
import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";

const allExpenses = [
];
function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const [expenses, setExpenses] = useState(allExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      console.log(expense);
      return [expense, ...prev];
    });
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.enteredDate.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <Card className="card">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.enteredTitle}
              amount={expense.enteredAmount}
              date={expense.enteredDate}
            />
          ))
        )}

        {/* <Navlink />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter> */}
      </Card>
    </>
  );
}

export default App;
