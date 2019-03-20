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

module.exports = router;
