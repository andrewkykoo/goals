const Goal = require("../models/goalModel");
const mongoose = require("mongoose");

const getGoals = async (req, res) => {
  const goals = await Goal.find({}).sort({ createdAt: -1 });
  res.status(200).json(goals);
};

const getSingleGoal = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such goal" });
  }
  const singleGoal = await Goal.findById(id);

  if (!singleGoal) {
    return res.status(404).json({ error: "No such goal" });
  }

  res.status(200).json(singleGoal);
};

const createGoal = async (req, res) => {
  const { subject, description, deadline } = req.body;

  try {
    const goal = await Goal.create({ subject, description, deadline });
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such goal" });
  }

  const goal = await Goal.findOneAndDelete({ _id: id });

  if (!goal) {
    return res.status(400).json({ error: "No such goal" });
  }

  res.status(200).json(goal);
};

const updateGoal = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such goal" });
  }

  const goal = await Goal.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!goal) {
    return res.status(400).json({ error: "No such goal" });
  }

  res.status(200).json(goal);
};

module.exports = {
  getGoals,
  getSingleGoal,
  createGoal,
  deleteGoal,
  updateGoal,
};
