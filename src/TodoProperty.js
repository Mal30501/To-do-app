import React from "react";

export default function TodoProperty ({ todo, toggleComplete }) {
  const { title, description, author, dateCreated, complete, dateCompleted } = todo;

  return (
    <div>
      <b>{title}</b>
      {description && <p>{description}</p>}
      <p>Author: {author}</p>
      <p>Created: {new Date(dateCreated).toString()}</p>
      <label>
        Complete:{" "}
        <input type="checkbox" checked={complete} onChange={() => toggleComplete(todo)} />
      </label>
      {complete && <p>Completed: {new Date(dateCompleted).toString()}</p>}
    </div>
  );
};
