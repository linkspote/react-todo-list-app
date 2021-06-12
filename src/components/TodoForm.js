// State is used here to keep track of the user input
import React, { useState } from "react";

/**
 * Renders the todo form to add one to the list.
 *
 * @param addTodo
 * @returns {JSX.Element}
 * @constructor
 */
function TodoForm({ addTodo }) {
  // Define the variables containing the information of each todo
  const [value, setValue] = useState("");

  /**
   * Adds a new todo to the list.
   *
   * @param e
   */
  const handleSubmit = e => {
    // Prevents the default behaviour of the event target which would be a page reload
    e.preventDefault();

    // Only add new todo if input is not empty
    if (value.trim()) addTodo(value);

    // Reset input field
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label><b>Add Todo</b></label>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)} // Updates the task when input changes
          placeholder="Add new todo" />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;