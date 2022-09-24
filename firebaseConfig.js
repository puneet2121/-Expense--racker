const { collection, addDoc } = require("firebase/firestore")

const config = {
    apiKey: "AIzaSyCJ4mG0vJeljtXc7XOPSHw2egBI-Jmy5_U",
    authDomain: "expense-tracker-9f3eb.firebaseapp.com",
    projectId: "expense-tracker-9f3eb",
    storageBucket: "expense-tracker-9f3eb.appspot.com",
    messagingSenderId: "783379826189",
    appId: "1:783379826189:web:b8f0336adeee6533d0f744",
    measurementId: "G-RRKN85FY07"
};


const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);


module.exports = db;