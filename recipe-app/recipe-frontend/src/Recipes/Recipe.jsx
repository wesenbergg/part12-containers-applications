import PropTypes from "prop-types";

const Recipe = ({ recipe, onClickDelete, onClickComplete }) => {
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
      <span>{recipe.text}</span>
      {recipe.done ? (
        <>
          <span>This recipe is done</span>
          <span>
            <button onClick={() => onClickDelete(recipe)}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>This recipe is not done</span>
          <span>
            <button onClick={() => onClickDelete(recipe)}> Delete </button>
            <button onClick={() => onClickComplete(recipe)}>
              {" "}
              Set as done{" "}
            </button>
          </span>
        </>
      )}
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

export default Recipe;
