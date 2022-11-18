const express = require("express");

const router = express.Router();

// GET all topics
router.get("/", (req, res) => {
  res.json({ msg: "GET all topics" });
});

// GET a single topic
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single topic" });
});

// POST a new topic
router.post("/", (req, res) => {
  res.json({ msg: "POST a new topic" });
});

// DELETE a new topic
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a topic" });
});

// UPDATE a new topics
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a topic" });
});

module.exports = router;
