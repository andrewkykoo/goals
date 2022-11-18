const express = require("express");
const Topic = require("../models/topicModel");

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
router.post("/", async (req, res) => {
  const { title, likes, dislikes, comments } = req.body;
  try {
    const topic = await Topic.create({ title, likes, dislikes, comments });
    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
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
