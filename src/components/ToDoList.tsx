import React from "react";
import { ToDoListProps } from "../models/toDoListProps";
import "./ToDoList.css";

const ToDoList = (props: ToDoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onRemoveTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
