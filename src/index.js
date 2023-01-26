const express = require("express");
const crypto = require("node:crypto");

const app = express();
const id = crypto.randomUUID();

const courses = []

app.get("/courses", (req, res) => {
  return res.json([
    {
      id,
      curso: "curso 1",
      tema: "tema",
    },
  ]);
});

app.post("/courses", (req, res) => {
//   const { curso, tema } = req.body;
  return res.json({
    id,
    curso:"Um curso muito legal",
    tema: "Um tema de curso muito legal",
  });
});

app.put("/courses/:id", (req, res) => {
  return res.json(["curso 3"]);
});

app.patch("/courses/:id", (req, res) => {});

app.delete("/courses/:id", (req, res) => {
  return res.json();
});

app.listen(3333);
