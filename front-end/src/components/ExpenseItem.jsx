import React from "react";
import "../style/ExprenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { Card } from "./Card";
const ExpenseItem = (props) => {
  
  const expenseTitle = "Rent";
  const expenseAmount = 450;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={() => console.log('clicked')}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
