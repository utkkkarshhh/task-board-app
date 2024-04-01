const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./model/task");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Middlewares
const app = express();
app.use(bodyParser.json());
app.use(cors({ orign: "https://task-board-app-seven.vercel.app" }));

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database Connected Successfully`);
  })
  .catch((err) => {
    console.error("ERROR: Database Connection Failed", err);
  });

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ message: "Failed to retrieve tasks" });
  }
});

app.get("/api/getTaskById", async (req, res) => {
  try {
    const taskId = req.query.taskId;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error("Error fetching task:", err);
    res.status(500).json({ message: "Error fetching task" });
  }
});

app.patch("/api/editTask", async (req, res) => {
  try {
    const taskId = req.body.taskId;

    const { status, priority } = req.body;
    console.log(taskId, status, priority);
    const task = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: { status: status, priority: priority } },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error("Error editing task:", err);
    res.status(500).json({ message: "Error editing task" });
  }
});

app.post("/api/addTask", async (req, res) => {
  try {
    const { title, description, team, assignee, priority } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const task = new Task({
      title: title,
      content: description, // Using 'content' instead of 'description' because i've used description in CreateModal.
      team: team,
      assignee: assignee,
      priority: priority,
    });

    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).json({ message: "Error" });
  }
});

app.delete("/api/deleteTask", async (req, res) => {
  try {
    const taskId = req.query.taskId;
    console.log(taskId);
    const deletingTask = await Task.deleteOne({ _id: taskId });
    if (!deletingTask) {
      console.log("Not deleted");
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "Error deleting task" });
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend for TaskBoard App. https://www.github.com/utkkkarshhh");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
