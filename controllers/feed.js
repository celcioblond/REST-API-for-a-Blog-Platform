import { validationResult } from "express-validator";
import {Post} from "../models/post";

export const getPosts = (req, res, next) => {
  try {
    const posts = Post.find();
    res.status(200).json({
      message: "Fetched posts",
      posts
    });
  }catch(error) {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const createPost = (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    const error = new Error("Validation failed, entered data is incorred");
    error.status = 422;
    throw error;
  }
  const {title, content} = req.body;

  const post= new Post({
    title,
    content,
    imageUrl: "xd",
    creator: {
      name:  "Celcio",
    },
  });
  post.save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Post created sucessufly',
      post: post,
    })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  });
}

export const getPost = async(req, res) => {
  try {
    const {postId} = req.params.postId;
    const post = await Post.findById(postId);
    if(!post) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    } 
    res.status(200).json({
      message: "Post fetched",
      post
    });
  } catch(error) {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}