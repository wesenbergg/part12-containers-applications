const express = require("express");
const { Ingredient } = require("../mongo/index.js");
const router = express.Router();

/* GET ingredients listing. */
router.get("/", async (_, res) => {
  const ingredients = await Ingredient.find({});
  res.send(ingredients);
});

/* POST ingredient to listing. */
router.post("/", async (req, res) => {
  const ingredient = await Ingredient.create({
    text: req.body.text,
    done: false,
  });
  res.send(ingredient);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.ingredient = await Ingredient.findById(id);
  if (!req.ingredient) return res.sendStatus(404);

  next();
};

/* DELETE ingredient. */
singleRouter.delete("/", async (req, res) => {
  await req.ingredient.delete();
  res.sendStatus(200);
});

/* GET ingredient. */
singleRouter.get("/", async (req, res) => {
  res.json(req.ingredient);
});

/* PUT ingredient. */
singleRouter.put("/", async (req, res) => {
  const { text, done } = req.body;
  req.ingredient.text = text;
  req.ingredient.done = done;
  await req.ingredient.save();
  res.json(req.ingredient);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
