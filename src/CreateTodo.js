import React, { useState } from 'react';

function CreateToDo({ user, addTodo }) {
  const [todo, setTodo] = useState({ title: '', description: '', author: '', dateCreated: null, complete: false, dateCompleted: null });

  const manageInputField = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, dateCreated: Date.now() });
  };

  const manageForm = (event) => {
    event.preventDefault();
    if (todo.title) {
      addTodo({ ...todo, dateCreated: Date.now(), complete: false, dateCompleted: null });
      setTodo({ title: '', author: user.email, description: '', dateCreated: null, complete: false, dateCompleted: null });
    }
  };

  return (
    <form onSubmit={manageForm}>
      <label>
        Title:
        <input type="text" name="title" value={todo.title} onChange={manageInputField} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={todo.description} onChange={manageInputField} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default CreateToDo;
