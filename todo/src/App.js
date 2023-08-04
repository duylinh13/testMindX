import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterOption === "completed") {
      return todo.completed;
    } else if (filterOption === "uncompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="container">
      <h1 className="text">#todo</h1>
      <div className="filter">
        <button
          className={filterOption === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={filterOption === "uncompleted" ? "active" : ""}
          onClick={() => handleFilterChange("uncompleted")}
        >
          Active
        </button>
        <button
          className={filterOption === "completed" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      <hr />
      <div className="todo-list-container">
        <Form addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
