import React from "react";

/**
 * Renders a todo from the list and handles its actions.
 *
 * @param todo
 * @param index
 * @param toggleTodo
 * @param removeTodo
 * @returns {JSX.Element}
 * @constructor
 */
function Todo({ todo, index, toggleTodo, removeTodo }) {

  return (
    // TODO: Add "multiple root elements" example

    <div>
      <div>
        <div className="todo">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
          <div>
            <button onClick={() => toggleTodo(index)}>✓</button>{' '}
            <button onClick={() => removeTodo(index)}>✕</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;