import express from "express";
import { getPosts, createPost } from "../controllers/feed.js";
import {body} from "express-validator";

const router = express.Router();

//GET /feed/posts
router.get("/post", getPosts);

//POST /feed/post
router.post("/post", [
  body('title').trim().isLength({min: 5 }),
  body('content').trim().isLength({ming: 5}),
], createPost);

export default router;