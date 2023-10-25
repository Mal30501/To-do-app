import React from 'react';

function LogOut({ user, dispatchUser }) {
  return (
    <form onSubmit={() => dispatchUser({ type: 'LOGOUT' })}>
      User Email: <b>{user.email}</b>
      <input type="submit" value="Log out" />
    </form>
  );
}

export default LogOut;
