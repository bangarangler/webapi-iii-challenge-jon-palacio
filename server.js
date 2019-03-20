const express = require("express");

const helmet = require("helmet");

const postRouter = require("./data/post/postRouter.js");
const userRouter = require("./data/user/userRouter.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/posts", postRouter);
//server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hey There</h1><p>Welcome to the API</p>`);
});

module.exports = server;
