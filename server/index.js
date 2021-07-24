const express = require("express");
const morgan = require('morgan')
const cors = require('cors')

require("./mongoose");
const Task = require("./models/Task");


const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find() 
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.json(task);
});

app.delete("/tasks", (req, res) => {
  res.json([]);
});

app.get("/tasks/:id", (req, res) => {
  res.json([]);
});

app.put("/tasks/:id", (req, res) => {
  res.json([]);
});

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
