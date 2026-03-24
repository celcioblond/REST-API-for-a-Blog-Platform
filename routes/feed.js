import express from "express";
import { getPosts, createPost, getPost, updatePost, deletePost } from "../controllers/feed.js";
import {body} from "express-validator";

const router = express.Router();

//GET /feed/posts
router.get("/post", getPosts);

//POST /feed/post
router.post("/post", [
  body('title').trim().isLength({min: 5 }),
  body('content').trim().isLength({min: 5}),
], createPost);

//GET for single post
router.get("/post/:postId", getPost);

//Edit posts
router.put("/post/:postId", [
  body('title').trim().isLength({min: 5 }),
  body('content').trim().isLength({min: 5}),
], updatePost);

//delete posts
router.delete("/post/:postId", deletePost);

export default router;