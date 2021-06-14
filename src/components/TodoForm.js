// State is used here to keep track of the user input
import React, {useState} from "react";
import {FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Paper, Tooltip} from "@material-ui/core";
import {Add} from "@material-ui/icons";

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

  return (
    <Grid item xs={4}>
      <Paper component="form" onSubmit={handleSubmit} className="todo-form">
        <FormControl fullWidth>
          <InputLabel htmlFor="input-todo">Add new todo</InputLabel>
          <Input
            id="input-todo"
            type="text"
            className="input"
            value={value}
            placeholder="Walk the dog"
            endAdornment={
              <InputAdornment position="end">
                <Tooltip title="Add new todo">
                  <IconButton type="submit" color="primary">
                    <Add />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
    </Grid>
  );
}

export default TodoForm;