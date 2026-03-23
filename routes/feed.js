import express from "express";
import { getPosts, createPost, getPost } from "../controllers/feed.js";
import {body} from "express-validator";

const router = express.Router();

//GET /feed/posts
router.get("/post", getPosts);

//POST /feed/post
router.post("/post", [
  body('title').trim().isLength({min: 7 }),
  body('content').trim().isLength({ming: 5}),
], createPost);

//GET for single post
router.get("/post/:postId", getPost);

export default router;