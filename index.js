const express = require('express')
const app = express()
const port = 3000

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ4mG0vJeljtXc7XOPSHw2egBI-Jmy5_U",
  authDomain: "expense-tracker-9f3eb.firebaseapp.com",
  projectId: "expense-tracker-9f3eb",
  storageBucket: "expense-tracker-9f3eb.appspot.com",
  messagingSenderId: "783379826189",
  appId: "1:783379826189:web:b8f0336adeee6533d0f744",
  measurementId: "G-RRKN85FY07"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})