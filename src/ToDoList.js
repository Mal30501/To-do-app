import { useResource } from 'react-request-hook';
import CreateToDo from './CreateTodo'
import TodoProperty from './TodoProperty'
import { useEffect } from 'react';
export default function ToDoList({ user, todos, dispatchTodos }) {
  const [todolist, fetchTodos] = useResource(() => ({
    url: '/todos',
    method: 'GET',
  }));
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  const [newtodo, addTodo] = useResource((data) => ({
    url: '/todos',
    method: 'POST',
    data,
  }));
  useEffect(() => {
    if (newtodo && newtodo.data) {
      dispatchTodos({ type: 'CREATE_TODO', newtodo });
    }
    fetchTodos();
  }, [newtodo, fetchTodos]);
  const [completeTodo, CompleteTodo] = useResource((id, data) => ({
    url: `/todos/${id}`,
    method: 'PATCH',
    data,
  }));
  useEffect(() => {
    
    if (completeTodo && completeTodo.data) {
      dispatchTodos({ type: 'TOGGLE_TODO', completeTodo });
    }
    fetchTodos();
  }, [completeTodo]);
  const [deletedTodo, removeTodo] = useResource((id) => ({
    url: `/todos/${id}`,
    method: 'DELETE',
  }));
  useEffect(() => {
    if (deletedTodo && deletedTodo.data) {
      dispatchTodos({ type: 'DELETE_TODO', deletedTodo });
    }
    fetchTodos();
  }, [deletedTodo]);
  const manageAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  const manageToggleComplete = (markedToDo) => {
    CompleteTodo(markedToDo.id, { ...markedToDo, complete: !markedToDo.complete, dateCompleted: markedToDo.complete ? null : Date.now() });
    dispatchTodos({ type: 'TOGGLE_TODO', completeTodo });
  };

  const manageDeleteTodo = (todoToDelete) => {
    removeTodo(todoToDelete.id);
  };

  return (
    <div>
      <CreateToDo addTodo={manageAddTodo} user={user} />
      {(todolist.data||[]).map((todo, index) => (
        <div key={index}>
          <TodoProperty todo={todo} toggleComplete={manageToggleComplete} />
          <button onClick={() => manageDeleteTodo(todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
}