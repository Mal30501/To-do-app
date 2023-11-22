const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const ToDo = require("../models/ToDo");
require('dotenv').config();
const privateKey = process.env.JWT_PRIVATE_KEY;

router.use(async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      req.payload = jwt.verify(req.header("Authorization"), privateKey, {
        algorithms: ["RS256"],
      });
      next();
    } else {
      res.status(401).json({ error: "Authorization header missing." });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = new ToDo({
      title: req.body.title,
      description: req.body.description,
      author: req.payload.id,
    });

    const savedToDo = await post.save();
    res.status(201).json({
      id: savedToDo._id,
      title: savedToDo.title,
      description: savedToDo.description,
      author: savedToDo.author,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const todos = await ToDo.find({ author: req.payload.id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { title, description, complete, dateCompleted } = req.body;
    const updatedTodo = await ToDo.findOneAndUpdate(
      { _id: req.params.id, author: req.payload.id },
      { title, description, complete, dateCompleted },
      { new: true }
    );

    if (!updatedTodo) {
      res.status(404).json({ error: "Todo not found or unauthorized" });
    } else {
      res.status(200).json({
        id: updatedTodo._id,
        title: updatedTodo.title,
        description: updatedTodo.description,
        complete: updatedTodo.complete,
        dateCompleted: updatedTodo.dateCompleted,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndDelete(req.params.id).where("author").equals(req.payload.id);

    if (todo) {
      res.status(200).json({
        id: todo._id,
        title: todo.title,
        description: todo.content,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
