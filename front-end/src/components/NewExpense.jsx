import React from 'react'
import '../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const input = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(input)
  };
  return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense