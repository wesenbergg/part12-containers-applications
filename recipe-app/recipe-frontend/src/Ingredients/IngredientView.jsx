import { useEffect, useState } from "react";
import axios from "../../util/apiClient.js";

import List from "./List.jsx";
import Form from "./Form.jsx";

const IngredientView = () => {
  const [ingredientss, setIngredients] = useState([]);

  const refreshIngredients = async () => {
    const { data } = await axios.get("/ingredientss");
    if (!data || !Array.isArray(data)) {
      console.info("Invalid data format received from server");
      return;
    }
    setIngredients(data);
  };

  useEffect(() => {
    refreshIngredients();
  }, []);

  const createIngredient = async (ingredients) => {
    const { data } = await axios.post("/ingredientss", ingredients);
    setIngredients([...ingredientss, data]);
  };

  const deleteIngredient = async (ingredients) => {
    await axios.delete(`/ingredientss/${ingredients._id}`);
    refreshIngredients();
  };

  const completeIngredient = async (ingredients) => {
    await axios.put(`/ingredientss/${ingredients._id}`, {
      text: ingredients.text,
      done: true,
    });
    refreshIngredients();
  };

  return (
    <>
      <h1>Ingredients</h1>
      <Form createIngredient={createIngredient} />
      <List
        ingredientss={ingredientss}
        deleteIngredient={deleteIngredient}
        completeIngredient={completeIngredient}
      />
    </>
  );
};

export default IngredientView;
