const express = require("express");

const db = require("./userDb.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retreiving the Users");
  }
});

router.get("/:id", async (req, res) => {
  try {
  const user = await db.getById(req.params.id)
  if(user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({message: 'user not found for id'})
  }
  } catch (error) {
  console.log(error)
  res.status(500).json({message: 'Error retreiving the users'})
  }
})

module.exports = router;
