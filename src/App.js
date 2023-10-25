import './App.css';
import ToDoList from './ToDoList';
import UserBar from './UserBar';
import { useState, useReducer } from 'react';
import userReducer from './userReducer';
import todoReducer from './todoReducer';

function App() {
  const [user, dispatchUser] = useReducer(userReducer, null);
  const [todos, dispatchTodos] = useReducer(todoReducer, []);
  if(user){
    if(user.createTodoVisible)
    {
      return (
        <div>
          <UserBar user={user} dispatchUser={dispatchUser} />
          <ToDoList user={user} todos={todos} dispatchTodos={dispatchTodos} />
        </div>
      );
    }else{
      return (
        <div>
          <UserBar user={user} dispatchUser={dispatchUser} />
        
        </div>
      );
    }
  }else{
    return (
      <div>
        <UserBar user={user} dispatchUser={dispatchUser} />
       
      </div>
    );
  }
}

export default App;
