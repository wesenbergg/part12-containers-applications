import Todo from "./Todo";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete}
        />
      ))}
    </>
  );
};

export default TodoList;
