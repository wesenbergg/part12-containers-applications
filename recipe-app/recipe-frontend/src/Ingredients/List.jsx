import Ingredient from "./Ingredient";
import PropTypes from "prop-types";

const IngredientList = ({
  ingredientss = [],
  deleteIngredient,
  completeIngredient,
}) => {
  const onClickDelete = (ingredients) => () => {
    deleteIngredient(ingredients);
  };

  const onClickComplete = (ingredients) => () => {
    completeIngredient(ingredients);
  };

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {ingredientss.map((ingredients) => (
        <Ingredient
          key={ingredients._id}
          ingredients={ingredients}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete}
        />
      ))}
    </>
  );
};

IngredientList.propTypes = {
  ingredientss: PropTypes.array,
  deleteIngredient: PropTypes.func.isRequired,
  completeIngredient: PropTypes.func.isRequired,
};

export default IngredientList;
