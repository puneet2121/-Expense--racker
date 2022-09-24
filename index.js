// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid"
import bodyParser from "body-parser"
import Express from "express";
import db from './firebaseConfig'

const app = Express()
const port = 3000

// const config = {
//   apiKey: "AIzaSyCJ4mG0vJeljtXc7XOPSHw2egBI-Jmy5_U",
//   authDomain: "expense-tracker-9f3eb.firebaseapp.com",
//   projectId: "expense-tracker-9f3eb",
//   storageBucket: "expense-tracker-9f3eb.appspot.com",
//   messagingSenderId: "783379826189",
//   appId: "1:783379826189:web:b8f0336adeee6533d0f744",
//   measurementId: "G-RRKN85FY07"
// };


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/users', async (req, res) => {
  console.log("In Post Request /users")
  try {
    const docRef = await addDoc(collection(db, "users", req.body.userId), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  res.send("Done")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})