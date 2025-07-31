import PropTypes from "prop-types";

const Ingredient = ({ ingredients, onClickDelete, onClickComplete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
        marginBottom: "1rem",
      }}
    >
      <span>{ingredients.text}</span>
      {ingredients.done ? (
        <>
          <span>This ingredients is done</span>
          <span>
            <button onClick={() => onClickDelete(ingredients)}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>This ingredients is not done</span>
          <span>
            <button onClick={() => onClickDelete(ingredients)}> Delete </button>
            <button onClick={() => onClickComplete(ingredients)}>
              {" "}
              Set as done{" "}
            </button>
          </span>
        </>
      )}
    </div>
  );
};

Ingredient.propTypes = {
  ingredients: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

export default Ingredient;
