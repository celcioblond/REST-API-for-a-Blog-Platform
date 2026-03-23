import express from "express";
import feedRoutes from "../routes/feed.js";
import bodyParser from "body-parser";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
console.log("URI: ", process.env.MONGODB_URI);
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, 'images')));
app.use("/feed", feedRoutes)
app.use((error, req, res, next) => {
  console.log(error);
  const {status} = error.statusCode || 500;
  const {message} = error.message;
  res.status(status).json({
    message
  });
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});