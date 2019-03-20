const express = require("express");

const helmet = require("helmet");

function forceUpper(req, res, next) {
  console.log(req.method);
  //if (req.method === "POST" || req.method === "PUT") {
  if (req.method === ("POST" || "PUT")) {
    req.body.name = req.body.name.toUpperCase();
    console.log(req.body);
    next();
  } else {
    next();
  }
}

const postRouter = require("./data/post/postRouter.js");
const userRouter = require("./data/user/userRouter.js");
const usersPostsRouter = require("./data/usersPosts/usersPostsRouter.js");

const server = express();

server.use(express.json());
server.use(forceUpper);
server.use(helmet());

server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);
server.use("/api/usersposts", usersPostsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hey There</h1><p>Welcome to the API</p>`);
});

module.exports = server;
