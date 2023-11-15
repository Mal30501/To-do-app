const todoReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_TODO':
        return [...state, action.newTodo];
      case 'TOGGLE_TODO':
        return state.map((todo) =>
          todo === action.clickedTodo
            ? { ...todo, complete: !todo?.complete, dateCompleted: todo?.complete ? null : Date.now() }
            : todo
        );
      case 'DELETE_TODO':
        return state.filter((todo) => todo !== action.todoToDelete);
      default:
        return state;
    }
  };
  
  export default todoReducer;
  