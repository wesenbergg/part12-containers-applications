import { useEffect, useState } from "react";
import axios from "../util/apiClient.js";

import List from "./List.jsx";
import Form from "./Form.jsx";

const RecipeView = () => {
  const [recipes, setRecipes] = useState([]);

  const refreshRecipes = async () => {
    const { data } = await axios.get("/recipes");
    setRecipes(data);
  };

  useEffect(() => {
    refreshRecipes();
  }, []);

  const createRecipe = async (recipe) => {
    const { data } = await axios.post("/recipes", recipe);
    setRecipes([...recipes, data]);
  };

  const deleteRecipe = async (recipe) => {
    await axios.delete(`/recipes/${recipe._id}`);
    refreshRecipes();
  };

  const completeRecipe = async (recipe) => {
    await axios.put(`/recipes/${recipe._id}`, {
      text: recipe.text,
      done: true,
    });
    refreshRecipes();
  };

  return (
    <>
      <h1>Recipes</h1>
      <Form createRecipe={createRecipe} />
      <List
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        completeRecipe={completeRecipe}
      />
    </>
  );
};

export default RecipeView;
