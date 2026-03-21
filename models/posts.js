import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String, 
    required: true,
  },
  creator: {
    type: Object,
    required: String
  }
}, {timestamps: true}
);

export default Post = mongoose.model("Post", postSchema);