import React, { useRef } from "react";
import { NewToDoProps } from "../models/newToDoProps";
import "./NewToDo.css";

const NewToDo = (props: NewToDoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <div>
        <label htmlFor="todo-text">ToDo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default NewToDo;
