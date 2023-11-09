import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div className='Login'>
        <form className='Form'>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login