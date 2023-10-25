import React, { useState } from 'react';

function Register({ dispatchUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister(event) {
    event.preventDefault();
    // Perform registration logic
    dispatchUser({ type: 'REGISTER', email });
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
