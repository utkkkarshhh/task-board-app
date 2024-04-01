const mongoose = require("mongoose");

const task = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["P0", "P1", "P2"],
  },
  content: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Assign", "In Progress", "Completed", "Deployed", "Deferred"],
  },
  type: {
    type: String,
    enum: [
      "pendingTasks",
      "inProgressTasks",
      "completedTask",
      "deployedTasks",
      "deferredTasks",
    ],
    default: "pendingTasks",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", task);
