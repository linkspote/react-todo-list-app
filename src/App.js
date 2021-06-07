/**
 * The useEffect React Hook in our app is used to store the data in the Local Storage of the browser and to access it
 * later on.
 * A State in React is immutable, meaning it cannot be changed directly. States can be objects or specific data types.
 */
import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// This key is used to identify the stored todos of this app
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

/**
 * Provides the functionality for the todo component and serves as the main entry point of the app.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  // Get the first two elements of the array using Array Destructure Syntax
  const [todos, setTodos] = useState([])

  // Populate the todos when the app initially renders
  useEffect(() => {
    // Get stored todos if any
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    // If there are todos set the todos using the stored ones
    if (storageTodos)
      setTodos(storageTodos);
  }, []); // The empty array is provided to prevent updating to infinity and beyond.

  // Use Local Storage of browser to store todos in JSON format
  // If the list of todos is empty the effect gets fired once for initialisation
  // Else the effect gets fired every time an update occurs
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Adds a new todo to the list by cloning and overwriting the current list. The new todo is added at the top of the
   * existing ones.
   *
   * @param todo to be added to the list
   */
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleEdit(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          console.log(todo.task);
          return {...todo, edit: !todo.edit};
        }
        return todo;
      })
    );
  }

  /**
   * Inverts the completion status of the todo with the provided id.
   *
   * @param id of todo where completion status should be changed
   */
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        // If the ids match a new todo with the negated value of completed will be returned
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    );
  }

  /**
   * Removes the todo with the provided id from the list using the filter method for arrays.
   * @param id
   */
  function removeTodo(id) {
    // If the ids match the todo will be carried over otherwise it gets dumped
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo by Sam Gamage</p>
        <p>https://www.youtube.com/watch?v=nUl5QLkVdvU</p>

        {/* The function gets passed as property. Properties in React are written in camelCase and are uni-directional,
            i.e. a parent component like App can pass information to a child component like TodoForm, but not the other
            way around. Child components can only receive information from their parent component. */}
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} toggleEdit={toggleEdit} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;
