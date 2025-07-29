import PropTypes from "prop-types";

const Todo = ({ todo, onClickDelete, onClickComplete }) => {
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
      <span>{todo.text}</span>
      {todo.done ? (
        <>
          <span>This todo is done</span>
          <span>
            <button onClick={() => onClickDelete(todo)}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>This todo is not done</span>
          <span>
            <button onClick={() => onClickDelete(todo)}> Delete </button>
            <button onClick={() => onClickComplete(todo)}> Set as done </button>
          </span>
        </>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

export default Todo;
