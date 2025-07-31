import { useState } from "react";
import PropTypes from "prop-types";

const IngredientForm = ({ createIngredient }) => {
  const [text, setText] = useState("");

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createIngredient({ text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  );
};
IngredientForm.propTypes = {
  createIngredient: PropTypes.func.isRequired,
};

export default IngredientForm;
