const Topic = require("../models/topicModel");
const mongoose = require("mongoose");

// get all topics
const getTopics = async (req, res) => {
  const topics = await Topic.find({}).sort({ createdAt: -1 });
  res.status(200).json(topics);
};

// get a single topic
const getSingleTopic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such topic" });
  }
  const singleTopic = await Topic.findById(id);

  if (!singleTopic) {
    return res.status(404).json({ error: "No such topic" });
  }

  res.status(200).json(singleTopic);
};

// create a new topic
const createTopic = async (req, res) => {
  const { title, likes, dislikes, comments } = req.body;

  try {
    const topic = await Topic.create({ title, likes, dislikes, comments });
    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// delete a topic

// update a topic

module.exports = {
  getTopics,
  getSingleTopic,
  createTopic,
};
