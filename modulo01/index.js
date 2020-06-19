const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { }

const users = ["Otávio", "Stanley", "Mesquita", "João", "Andrey", "Matheus"];

/* Log using middleware */
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}  |  URL: ${req.url}`);

  next();
  console.timeEnd("Request");
});

/* Middlewares */

function checkUserExists(req, res, next) {
  if (!req.body.name)
    return res.status(400).json({ error: "User name is required" });
  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) return res.status(400).json({ error: "user not found" });

  req.user = user;
  return next();
}

/* Get all users */
server.get("/users/", (req, res) => {
  return res.json(users);
});

/* Get user by index */
server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

/* Create user */
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

/* Edit user */
server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { name } = req.body;
  const { index } = req.params;
  users[index] = name;

  return res.json(users);
});

/* Delete user */
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
