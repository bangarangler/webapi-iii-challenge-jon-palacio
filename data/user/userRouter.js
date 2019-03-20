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
    const user = await db.getById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found for id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retreiving the users" });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await db.insert(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await db.remove(req.params.id);
    if (user > 0) {
      res.status(200).json({ message: "User has been deleted" });
    } else {
      res.status(404).json({ message: "No user to del at target id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await db.update(req.params.id, req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No user to update at this id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
