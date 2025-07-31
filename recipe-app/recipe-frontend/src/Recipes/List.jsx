import Recipe from "./Recipe";

// eslint-disable-next-line react/prop-types
const RecipeList = ({ recipes, deleteRecipe, completeRecipe }) => {
  const onClickDelete = (recipe) => () => {
    deleteRecipe(recipe);
  };

  const onClickComplete = (recipe) => () => {
    completeRecipe(recipe);
  };

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {recipes.map((recipe) => (
        <Recipe
          key={recipe._id}
          recipe={recipe}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete}
        />
      ))}
    </>
  );
};

export default RecipeList;
