/**
 * The useEffect React Hook in our app is used to store the data in the Local Storage of the browser and to access it
 * later on.
 * A State in React is immutable, meaning it cannot be changed directly. States can be objects or specific data types.
 */
import React from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {Grid, Typography} from "@material-ui/core";

/**
 * Provides the functionality for the todo component and serves as the main entry point of the app.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="app">
      <div className="container">
        <Typography variant="h2" component="h1" align="center">Todo List</Typography>
        <Grid container spacing={2} justify="center">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
