import React from "react";
import Todo from "./Todo";
import {Grid, Paper} from "@material-ui/core";

/**
 * Renders the list of todos.
 *
 * @param todos
 * @param toggleTodo
 * @param removeTodo
 * @returns {JSX.Element}
 * @constructor
 */
export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <React.Fragment>
      {/*
        * Here we are inserting JS to map over the list of todos and to provide an identifier for each element.
        * Note: When you render a JSX element from an array map each element should have a unique key attached to the
        *       parent element returned from the map.
        */}
      {todos.map((todo, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3}>
            <Todo
              index={index}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          </Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
}