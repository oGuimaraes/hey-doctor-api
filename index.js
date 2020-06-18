const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { }

const users = ["Otávio", "Cleiton", "Rasta", "Cabeça", "Gelo"];

/* Get all users */
server.get("/users/", (req, res) => {
  return res.json(users);
});

/* Get user by index */
server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

/* Create user */
server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

/* Edit user */
server.put("/users/:index", (req, res) => {
  const { name } = req.body;
  const { index } = req.params;
  users[index] = name;

  return res.json(users);
});

/* Delete user */
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
