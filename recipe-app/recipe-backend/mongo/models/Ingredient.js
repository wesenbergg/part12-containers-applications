const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

module.exports = mongoose.model("Recipe", recipeSchema);
