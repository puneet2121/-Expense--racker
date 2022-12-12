import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 20 },
  amount: { type: Number, required: true },
  date: {type: Date, required: true }
});

export default mongoose.model('Expense', expenseSchema);

