import "../style/ExprenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { Card } from "./Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const updateTitle = () => {
    setTitle("rent");
  };
  return (
    <>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={updateTitle}>change title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
