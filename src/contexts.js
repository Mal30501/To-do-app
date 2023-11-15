import React, { createContext, useContext, useReducer } from 'react';
import userReducer from './userReducer';
import todoReducer from './todoReducer';

const StateContext = createContext();

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within a StateContext Provider');
  }
  return context;
};

export const StateProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, null);
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  return (
    <StateContext.Provider value={{ user, dispatchUser, todos, dispatchTodos }}>
      {children}
    </StateContext.Provider>
  );
};