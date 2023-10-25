const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { email: action.email, createTodoVisible: true };
      case 'REGISTER':
        return { email: action.email, createTodoVisible: true };
      case 'LOGOUT':
        return null;
      default:
        return state;
    }
  };
  
  export default userReducer;