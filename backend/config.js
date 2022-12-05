import mongoose from "mongoose";

const URL = process.env.MONGO_URI;

const connectToDB = async () => {
  mongoose
    .connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("DB listening"))
    .catch((err) => {
      console.log(err, "err");
      process.exit(1);
    });
};
export default connectToDB;