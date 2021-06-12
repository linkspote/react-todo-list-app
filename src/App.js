/**
 * The useEffect React Hook in our app is used to store the data in the Local Storage of the browser and to access it
 * later on.
 * A State in React is immutable, meaning it cannot be changed directly. States can be objects or specific data types.
 */
import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// TODO: Add Material UI

// This key is used to identify the stored todos of this app
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

/**
 * Provides the functionality for the todo component and serves as the main entry point of the app.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  // Declare empty state variable for todos which provides two elements, the todos and the set function
  const [todos, setTodos] = useState([]);

  // Populate the todos when the app initially renders
  useEffect(() => {
    // Get stored todos if any
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    // If there are todos set the todos using the stored ones
    if (storedTodos) setTodos(storedTodos);
  }, []); // The empty array is provided to prevent updating to infinity and beyond

  /**
   * Use Local Storage of browser (e.g. Chrome, Edge, Firefox) to store todos in JSON format
   * If the list of todos is empty the effect gets fired once for initialisation
   * Else the effect gets fired every time an update occurs
   */
  useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)), [todos]);

  /**
   * Adds a new todo to the list by cloning and overwriting the current list. The new todo is added at the bottom of the
   * existing ones. To add new entries from top to bottom just swap the positions of the parameters.
   *
   * @param text short description of the task
   */
  const addTodo = text => setTodos([...todos, { text }]);

  /**
   * Inverts the completion status of the todo with the provided identifier.
   *
   * @param index of todo where completion status should be changed
   */
  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  /**
   * Removes the todo with the provided identifier from the list.
   *
   * @param index of todo to remove
   */
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
