const express = require('express')

const db = require('../user/userDb.js')

const router = express.Router()

router.get("/:id", async (req, res) => {
  try {
    const user = await db.getUserPosts(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No user Posts found at target id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
