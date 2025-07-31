const express = require("express");
const redis = require("../redis/index.js");
const router = express.Router();

router.get("/", async (_, res) => {
  res.json({
    added_recipes: (await redis.getAsync("added_recipes")) || 0,
  });
});

module.exports = router;
