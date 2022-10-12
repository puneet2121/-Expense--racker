import React from 'react'
import '../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const input = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(input)
  };
  return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense