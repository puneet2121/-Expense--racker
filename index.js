const { collection, addDoc, query, getDocs } = require("firebase/firestore")
const { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = require("firebase/auth")
const uuidv4 = require("uuid").v4
const Express = require("express")
const bodyParser = require("body-parser")
const { db, auth } = require("./firebaseConfig")
// const swaggerUi = require('swagger-ui-express'),
// swaggerDocument = require('./swagger.json');

const app = Express()
const port = 3000
const cors = require('cors')

app.use(cors({origin: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   '/api-docs',
//   swaggerUi.serve, 
//   swaggerUi.setup(swaggerDocument)
// );

app.post('/expense', async (req, res) => {
  try {

    const { userId, name, amount, shop_name, recurring} = req.body;

    const docRef = await addDoc(collection(db, userId), {
      name,
      date: new Date().toDateString(),
      amount,
      shop_name,
      recurring,
    });
    
  } catch (e) {
    res.send("Error adding document: ", e);
  }
  res.send("Done")
})

app.get("/expense", async (req, res) => {
  let data = []

  const q = query(collection(db, req.body.userId))

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(doc.id, doc.data());
  });
  res.send(data)
      })
      
app.get("/dailyTotal", async (req, res) => {
  let data = []
  let total = 0

  const q = query(collection(db, req.body.userId))

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if(doc.data().date == new Date().toDateString()){
      total += doc.data().amount;
    }
  });
  res.send(total.toString())
})

app.post("/auth", (req, res) => {

  const email = req.body.email
  const password = req.body.password

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      updateProfile(user, {
        displayName: req.body.name
      }).then(() => {
        // sendEmailVerification(auth.currentUser)
        // .then(() => {
          res.send("Done")
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            let user = userCredential.user;
            if(user.emailVerified){
              res.send(user)
            } else {
              res.send("Email Not Verified")
  }
})
          .catch((error) => {
            const { code, message } = error;
            res.send(code + "\n" + message)
          });
        // });
      })
    })
    .catch((error) => {
      res.send(error.code + "\n" + error.message)
    });
})

app.get("/auth", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      if(user.emailVerified){
        res.send(user)
      } else {
        res.send("Email Not Verified")
      }
})
    .catch((error) => {
      const { code, message } = error;
      res.send(code + "\n" + message)
    });
})



app.listen(port, () => {})