import React from "react";
import Todo from "./Todo";

/**
 * Renders the list of todos in an array.
 *
 * @param todos
 * @param toggleComplete
 * @param removeTodo
 * @returns {JSX.Element}
 * @constructor
 */
function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul>
      {/* Here we are inserting JS to map over the list of todos. Note: When you render a JSX element from an array
          map each element should have a unique key attached to the parent element returned from the map. */}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      ))}
    </ul>
  )
}

export default TodoList;