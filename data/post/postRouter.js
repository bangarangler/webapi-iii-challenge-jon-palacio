const express = require("express");

const db = require("./postDb.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await db.get(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retreiving the Posts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await db.getById(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "post not found for id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retreiving the posts" });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = await db.insert(req.body);
    console.log(post);
    //if (!req.body.text) {
    //return res.status(400).json({ message: "Must inclue text" });
    //}
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "Error adding post to the database, Internal error. It is us not you"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await db.remove(req.params.id);
    if (post > 0) {
      res.status(200).json({ message: "Post has been deleted" });
    } else {
      res.status(404).json({ message: "No post to del at target id" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error deleting post, Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await db.update(req.params.id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "No post to update at this id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Error on server" });
  }
});

module.exports = router;
