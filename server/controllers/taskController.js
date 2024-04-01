const Task = require("../model/task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ message: "Failed to retrieve tasks" });
  }
};

exports.getTaskById = async (req, res) => {
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
};

exports.editTask = async (req, res) => {
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
};

exports.addTask = async (req, res) => {
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
};

exports.deleteTask = async (req, res) => {
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
};
