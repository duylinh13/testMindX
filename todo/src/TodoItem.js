import React, { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const TodoItem = ({ todo, deleteTodo, toggleComplete, toggleDone }) => {
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      style={{ backgroundColor: todo.color }}
    >
      <div className="checkbox-container">
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </button>
      </div>

      <>
        <span onClick={() => toggleDone(todo.id)}>{todo.task}</span>
        <div className="todo-item-buttons">
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </>
    </div>
  );
};

export default TodoItem;
