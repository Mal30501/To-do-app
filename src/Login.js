import React, { useState } from 'react';

function Login({ dispatchUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // Perform login logic
    dispatchUser({ type: 'LOGIN', email });
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="Email">Email-</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="Email" />
      <label htmlFor="Password">Password-</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="Password" />
      <input type="submit" value="Login" disabled={email.length === 0 || password.length === 0} />
    </form>
  );
}

export default Login;
