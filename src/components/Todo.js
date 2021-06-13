import React from "react";
import {Divider, Grid, IconButton, Typography} from "@material-ui/core";
import {Delete, Done} from "@material-ui/icons";

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
    /* If we would render the following three lines of code an error occurs telling us that adjacent JSX elements
       must be wrapped in an enclosing tag and that we could use a React Fragment to solve this problem.
       To say it simple when we create a component or anything else with JSX we always need a single root element like
       in XML. */
    // <Typography style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</Typography>
    // <IconButton onClick={() => toggleTodo(index)}><Done /></IconButton>
    // <IconButton onClick={() => removeTodo(index)}><Delete /></IconButton>

    <Grid container justify="space-between" alignItems="center" className="todo">
      <Grid item>
        <Typography style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Divider className="divider" orientation="vertical" flexItem />
          <IconButton onClick={() => toggleTodo(index)}><Done /></IconButton>
          <IconButton onClick={() => removeTodo(index)}><Delete /></IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Todo;