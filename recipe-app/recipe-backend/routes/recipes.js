const express = require("express");
const { Recipe } = require("../mongo/index.js");
const redis = require("../redis/index.js");
const router = express.Router();

/* GET recipes listing. */
router.get("/", async (_, res) => {
  const recipes = await Recipe.find({});
  await redis.setAsync(
    "added_recipes",
    recipes.length > 0 ? recipes.length : 0
  );
  res.send(recipes);
});

/* POST recipe to listing. */
router.post("/", async (req, res) => {
  const recipe = await Recipe.create({
    text: req.body.text,
    done: false,
  });
  await redis.setAsync(
    "added_recipes",
    Number(await redis.getAsync("added_recipes")) + 1
  );
  res.send(recipe);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.recipe = await Recipe.findById(id);
  if (!req.recipe) return res.sendStatus(404);

  next();
};

/* DELETE recipe. */
singleRouter.delete("/", async (req, res) => {
  await req.recipe.delete();
  await redis.setAsync(
    "added_recipes",
    Number(await redis.getAsync("added_recipes")) - 1
  );
  res.sendStatus(200);
});

/* GET recipe. */
singleRouter.get("/", async (req, res) => {
  res.json(req.recipe);
});

/* PUT recipe. */
singleRouter.put("/", async (req, res) => {
  const { text, done } = req.body;
  req.recipe.text = text;
  req.recipe.done = done;
  await req.recipe.save();
  res.json(req.recipe);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
