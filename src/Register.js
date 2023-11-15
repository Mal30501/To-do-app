import React, { useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';

function Register({ dispatchUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user , register ] = useResource(() => ({
    url: '/users',
    method: 'post',
    data: { username:name, email:email, password:password }
    }));
    useEffect(() => {
      if (user && user.data) {
        dispatchUser({ type: 'REGISTER', email });
      }
      }, [user]);
  function handleRegister(event) {
    register(name, email, password);
  }

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="Name">Name-</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="Name" />
      <label htmlFor="Email">Email-</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="Email" />
      <label htmlFor="Password">Password-</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="Password" />
      <label htmlFor="ConfirmPassword">Confirm Password-</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="ConfirmPassword" />
      <input type="submit" value="Register" disabled={name.length === 0 || email.length === 0 || password.length === 0 || confirmPassword !== password} />
    </form>
  );
}

export default Register;
