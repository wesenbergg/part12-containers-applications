const express = require("express");
const { Todo } = require("../mongo");
const redis = require("../redis");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  await redis.setAsync("added_todos", todos.length > 0 ? todos.length : 0);
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  await redis.setAsync(
    "added_todos",
    (await redis.getAsync("added_todos")) + 1
  );
  res.send(todo);
});

router.get("/statistics", async (_, res) => {
  res.json({
    added_todos: (await redis.getAsync("added_todos")) || 0,
  });
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  await redis.setAsync(
    "added_todos",
    (await redis.getAsync("added_todos")) - 1
  );
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const { text, done } = req.body;
  req.todo.text = text;
  req.todo.done = done;
  await req.todo.save();
  res.json(req.todo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
