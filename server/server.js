const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn JavaScript", done: false },
  { id: 2, title: "Build a portfolio project", done: false }
];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Mark task as done
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.done = true;
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// Remove all done tasks (requires password)
app.delete("/tasks/done", (req, res) => {
  const password = req.headers["x-admin-password"];
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!password || password !== correctPassword) {
    return res.status(403).json({ error: "Invalid password" });
  }

  const beforeCount = tasks.length;
  tasks = tasks.filter(t => !t.done);
  res.json({ removed: beforeCount - tasks.length });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
