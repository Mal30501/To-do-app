
import './App.css';                             
import ToDoList from './ToDoList';
import UserBar from './UserBar';
import {useState} from 'react';

function App() {
  const [User,setUser]=useState(``)
  return (
    <div>
      <UserBar User={User} setUser={setUser} />
      <ToDoList User={User} />
    </div>
  );
}

export default App;
