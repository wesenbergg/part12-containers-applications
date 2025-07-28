const express = require("express");
const redis = require("../redis");
const router = express.Router();

router.get("/", async (_, res) => {
  res.json({
    added_todos: (await redis.getAsync("added_todos")) || 0,
  });
});

module.exports = router;
