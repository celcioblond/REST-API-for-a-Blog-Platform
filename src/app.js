import express from "express";
import feedRoutes from "../routes/feed.js";
import bodyParser from "body-parser";
import connectDB from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();
console.log("URI: ", process.env.MONGODB_URI);
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/feed", feedRoutes)


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});