import React from "react";
import Todo from "./Todo";

/**
 * Renders the list of todos.
 *
 * @param todos
 * @param toggleTodo
 * @param removeTodo
 * @returns {JSX.Element}
 * @constructor
 */
function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      {/*
        * Here we are inserting JS to map over the list of todos and to provide an identifier for each element.
        * Note: When you render a JSX element from an array map each element should have a unique key attached to the
        *       parent element returned from the map.
        */}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;