import React from "react";
import TodoForm from "./TodoForm";

/**
 * Renders a todo from the list and handles its actions.
 *
 * @param todo
 * @param toggleComplete
 * @param removeTodo
 * @returns {JSX.Element}
 * @constructor
 */
function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    /* If we would render the following three lines of code an error occurs telling us that adjacent JSX elements
       must be wrapped in an enclosing tag and that we could use a React Fragment to solve this problem.
       To say it simple when we create a component or anything else with JSX we always need a single root element like
       in XML. */
    // <input type="checkbox" />
    // <li>{todo.task}</li>
    // <button>X</button>

    <li style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} checked={todo.completed} />
      {/* Here we are using a ternary expression to mark completed and uncompleted todos in different ways. */}
      <span style={{ color: "white", textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </span>
      <button onClick={handleRemoveClick}>X</button>
    </li>
  );
}

export default Todo;