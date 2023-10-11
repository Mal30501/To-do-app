import React, { useState } from "react";
import CreateToDo from "./CreateTodo";
import TodoProperty from "./TodoProperty";


export default function ToDoList ({User}) {
  const [todoitems, setToDoItems] = useState([]);

  const manageAddTodo = (newTodo) => {
    setToDoItems([...todoitems, newTodo]);
  };

  const manageToggleComplete = (clickedTodo) => {
    setToDoItems(
      todoitems.map((todo) =>
        todo === clickedTodo ? { ...todo, complete: !todo.complete, dateCompleted: todo.complete ? null : Date.now() } : todo
      )
    );
  };

  return (
    <div>
      <CreateToDo addTodo={manageAddTodo} User={User} />
      {todoitems.map((todo, index) => (
        <TodoProperty key={index} todo={todo} toggleComplete={manageToggleComplete} />
      ))}
    </div>
  );
};
