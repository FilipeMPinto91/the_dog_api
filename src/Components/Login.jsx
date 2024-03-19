import React, { useRef } from 'react';
import axios from 'axios';
import { useSubId } from './context/SubIdContext';

const Login = ({ onLogin }) => {
  const { subId,  setSubId } = useSubId();
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });
      setSubId(response.data.username);
      onLogin(response.data.username);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  console.log(subId)

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
