import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState("");

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  );
};
TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
