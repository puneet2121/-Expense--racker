
import "../style/ExprenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { Card } from "./Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const expenseTitle = "Rent";
  const [title,setTitle] = useState(expenseTitle);
  
  const updateTitle = () => {
    if (title === 'update') {
      setTitle('rent')
    }
    else {
      setTitle('update')
    }
  }
  const expenseAmount = 450;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={updateTitle}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
