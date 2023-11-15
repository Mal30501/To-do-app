import React, { useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';

function Login({ dispatchUser }) {
  const [ loginFailed, setLoginFailed ] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, signin] = useResource((data)=>({
    url:'/login',
    method:'POST',
    data,
  }));
  useEffect(() => {

    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setLoginFailed(true);
      } else {
        setLoginFailed(false);
        dispatchUser({ type: 'LOGIN', email });
      }
    }
  }, [user]);
  function handleLogin(event) {
    event.preventDefault();
    if (email && password) {
      signin({ email: email, password: password });
    }
  }

  return (
    <>
    {loginFailed && (<span style={{ color: "red" }}>Invalid username or password</span>)}
    <form onSubmit={handleLogin}>
      <label htmlFor="Email">Email-</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="Email" />
      <label htmlFor="Password">Password-</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="Password" />
      <input type="submit" value="Login" disabled={email.length === 0 || password.length === 0} />
    </form>
    </>
  );
}

export default Login;
