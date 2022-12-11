import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: {type: Number, required: true }
});

const expenseModel = mongoose.model('expense', expenseSchema);

export default expenseModel;