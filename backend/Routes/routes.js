// URL PATH
import { createExpense, getExpense } from "../controllers/expenseController.js";
import express from "express";
const router = express.Router();

router.get('/', (req,res) => {
  res.send("hello world");
});
router.post('/createExpense',createExpense);
router.get('/getExpense',getExpense);
export default router;