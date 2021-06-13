// State is used here to keep track of the user input
import React, { useState } from "react";
import {Grid, IconButton, Input, InputAdornment} from "@material-ui/core";
import {Add, Send} from "@material-ui/icons";

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
    <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Walk the dog"
          label="Add new todo"
          startAdornment={
            <InputAdornment position="start">
              <Add />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <Send />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    </Grid>
  );
}

export default TodoForm;