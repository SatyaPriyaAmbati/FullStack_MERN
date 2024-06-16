import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Routes/Book.Route.js";
import cors from 'cors';
import userRoute from "./Routes/User.Route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;

(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
})();

app.use("/book", bookRoute);
app.use("/user",userRoute);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
