import React, { useState } from "react";
import "../style/ExpenseForm.css";

const ExpenseForm = (props) => {
  //Using three state
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  //Using one state in the form of an object
  const [input, setInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setInput({
      ...input,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setInput({
      ...input,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setInput({
      ...input,
      enteredDate: new Date(event.target.value),
    });
  };

  const submithandler = (e) => {
    e.preventDefault();
    
    props.onSaveExpenseData(input)
    setInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    
  };
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={input.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={input.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={input.enteredDate}
            min="2022-09-02"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
