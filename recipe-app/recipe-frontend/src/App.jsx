import "./App.css";
import IngredientView from "./Ingredients/IngredientView";
import RecipeView from "./Recipes/RecipeView";

function App() {
  return (
    <div className="App">
      <RecipeView />
      <IngredientView />
    </div>
  );
}

export default App;
