const express = require('express')
const firebaseConfig = require('./firebaseConfig')
const app = express()
const port = 3000

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseApp = initializeApp(firebaseConfig.config);
const analytics = getAnalytics(app);

app.get('/users', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})