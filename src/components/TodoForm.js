// State is used here to keep track of the user input
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Renders the todo form to add one to the list.
 *
 * @param addTodo
 * @returns {JSX.Element}
 * @constructor
 */
function TodoForm({addTodo}) {
  // Define the variables containing the information of each todo
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    edit: false
  });

  /**
   * Update the task property of a todo by cloning it using the spread operator and changing the value of the task
   * property.
   *
   * @param e
   */
  function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value});
  }

  /**
   * Adds a new todo to the list.
   *
   * @param e
   */
  function handleSubmit(e) {
    // Prevents the default behaviour of the event target which would be a page reload
    e.preventDefault();

    // Add new todo only if input is not empty
    if (todo.task.trim()) {
      // Add new todo using the provided information and the uuid package to create a unique id
      addTodo({...todo, id: uuidv4()});

      // Reset task input
      setTodo({...todo, task: ""});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        placeholder="Add a todo..."
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default TodoForm;