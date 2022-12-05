import express, { application } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config.js';

const port = process.env.PORT
// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));

connectToDB();

app.listen(port,() => console.log(`server is listening on ${port}`));
