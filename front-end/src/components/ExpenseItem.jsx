import React from "react";
import "../style/ExprenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2022, 9, 27);
  const expenseTitle = "Rent";
  const expenseAmount = 450;
  return (
    <div className="expense-item">
      <div>gg</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
