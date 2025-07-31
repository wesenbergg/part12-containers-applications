import "./App.css";
import IngredientView from "./Ingredients/IngredientView";
import RecipeView from "./Recipes/RecipeView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe App</h1>
        <p>Manage your favorite recipes and ingredients</p>
      </header>
      <main className="App-content">
        <div className="container">
          <div className="section">
            <RecipeView />
          </div>
          <div className="section">
            <IngredientView />
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <p>Recipe Application © 2025</p>
      </footer>
    </div>
  );
}

export default App;
