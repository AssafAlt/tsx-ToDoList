import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { ToDo } from "./models/toDo";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddingHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="">
      <NewToDo onAddTodo={todoAddingHandler} />
      <ToDoList items={todos} onRemoveTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
