export const getPosts = (req, res, next) => {
  res.status(200).json({posts: [
    {
      id: 1,
      title: "First post",
      content: "This is the first post",
      creator: {
        name: "Celcio"
      },
      createdAt: new Date()
    }
  ]})
};

export const createPost = (req, res, next) => {
  const {title, content} = req.body;


  res.status(201).json({
    message: "Post created succesfully",
    post: {
      id: new Date().toISOString(),
      title,
      content,
      creator : {
        name: "Celcio"
      },
      createdAt: new Date()
    }
  })
}