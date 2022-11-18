const express = require("express");
const Topic = require("../models/topicModel");
const {
  getTopics,
  getSingleTopic,
  createTopic,
  deleteTopic,
  updateTopic,
} = require("../controllers/topicController");

const router = express.Router();

// GET all topics
router.get("/", getTopics);

// GET a single topic
router.get("/:id", getSingleTopic);

// POST a new topic
router.post("/", createTopic);

// DELETE a new topic
router.delete("/:id", deleteTopic);

// UPDATE a new topics
router.patch("/:id", updateTopic);

module.exports = router;
