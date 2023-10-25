import React from 'react';
import LogOut from './LogOut';
import Login from './Login';
import Register from './Register';

export default function UserBar({ user, dispatchUser }) {
  if (user) {
        return <LogOut user={user} dispatchUser={dispatchUser} />;
  } else {
    return (
      <>
        <Login dispatchUser={dispatchUser} />
        <Register dispatchUser={dispatchUser} />
      </>
    );
  }
}
