import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const handleLogin = () => {
    alert('Successfully logged in!');
    // You can optionally redirect here using history.push('/home')
  };

  return (
    <div className='Login'>
      <form className='Form' onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        {/* Wrap only the "Login" button with Link */}
        <Link to='/home'>
          <input type="submit" value="Login" />
        </Link>
      </form>
    </div>
  );
}

export default Login;
