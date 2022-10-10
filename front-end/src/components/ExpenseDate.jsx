import React from 'react'
import "../style/ExprenseItem.css";
const ExpenseDate = (props) => {
  const month =props.date.toLocaleDateString('en-us', { month: 'long'})
  const year = props.date.toLocaleDateString('en-us', { year: 'numeric'})
  const day = props.date.toLocaleDateString('en-us', { day: 'numeric'})
  return (
    <div className='expense-date'>
       <div className='expense-date__month'>{month}</div>
        <div className='expense-year'>{year}</div>
        <div className='expense-day'>{day}</div>
    </div>
  )
}

export default ExpenseDate