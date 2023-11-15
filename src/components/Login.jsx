import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = () => {
   
    alert('Succesfully logged in!');
  };

  return (
    <div className='Login'>
      <form className='Form' onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
