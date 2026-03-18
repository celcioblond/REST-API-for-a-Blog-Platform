import express from "express";
import feedRoutes from "../routes/feed.js";
import bodyParser from "body-parser";


const app = express();

app.use(express.json());
app.use("/feed", feedRoutes)

app.listen(3000, () => {
  console.log("Server running port 3000");
})