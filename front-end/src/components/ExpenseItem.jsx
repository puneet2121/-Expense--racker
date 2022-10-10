import React from "react";
import "../style/ExprenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  
  const expenseTitle = "Rent";
  const expenseAmount = 450;
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
