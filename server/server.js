const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Middlewares
const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: ["http://localhost:3000", "https://task-board-app-seven.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

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

// Routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend for TaskBoard App. https://www.github.com/utkkkarshhh");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
