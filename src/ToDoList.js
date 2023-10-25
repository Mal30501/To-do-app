import CreateToDo from './CreateTodo'
import TodoProperty from './TodoProperty'
export default function ToDoList({ user, todos, dispatchTodos }) {
  const manageAddTodo = (newTodo) => {
    dispatchTodos({ type: 'CREATE_TODO', newTodo });
  };

  const manageToggleComplete = (clickedTodo) => {
    dispatchTodos({ type: 'TOGGLE_TODO', clickedTodo });
  };

  const manageDeleteTodo = (todoToDelete) => {
    dispatchTodos({ type: 'DELETE_TODO', todoToDelete });
  };

  return (
    <div>
      <CreateToDo addTodo={manageAddTodo} user={user} />
      {todos.map((todo, index) => (
        <div key={index}>
          <TodoProperty todo={todo} toggleComplete={manageToggleComplete} />
          <button onClick={() => manageDeleteTodo(todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
}