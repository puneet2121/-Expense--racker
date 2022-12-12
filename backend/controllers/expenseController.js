import mongoose from "mongoose";
import Expense from '../models/schema.js'

export const createExpense = async (req, res) => {
  try {
    const { title, amount,date } = req.body;
    // check all the details
    if (!title || !amount || !date) {
      throw new Error("title,amount and date are required");
    }
    const ExpenseExists = await Expense.findOne({ title });
    
    if (ExpenseExists) {
      throw new Error("title already exists");
    }
    const expense = await Expense.create({
      title,
      amount,
      date
     })
     expense.save()
     res.status(200).json({
       success: true,
       message: 'Expense created successfully',
       expense
     })
  } catch (error) {
    console.log(error)
  }
};

export const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find();
    res.status(201).json({
      success: true,
      expense
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}
