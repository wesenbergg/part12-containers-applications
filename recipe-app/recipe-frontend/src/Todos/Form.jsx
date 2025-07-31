import { useState } from "../../$node_modules/@types/react/index.js";
import PropTypes from "../../$node_modules/@types/prop-types/index.js";

const RecipeForm = ({ createRecipe }) => {
  const [text, setText] = useState("");

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe({ text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  );
};
RecipeForm.propTypes = {
  createRecipe: PropTypes.func.isRequired,
};

export default RecipeForm;
