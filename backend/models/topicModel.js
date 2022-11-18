const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    },
    dislikes: {
      type: Number,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", topicSchema);
