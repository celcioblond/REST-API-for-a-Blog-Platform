import express from "express";
import { getPosts, createPost } from "../controllers/feed.js";

const router = express.Router();

//GET /feed/posts
router.get("/post", getPosts);
router.post("/post", createPost);

export default router;