const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/tasks", taskController.getAllTasks);
router.get("/getTaskById", taskController.getTaskById);
router.patch("/editTask", taskController.editTask);
router.post("/addTask", taskController.addTask);
router.delete("/deleteTask", taskController.deleteTask);

module.exports = router;
