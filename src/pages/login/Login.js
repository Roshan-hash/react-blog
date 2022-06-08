import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
        <span className='loginTitle'> Login </span>
        <form className='loginform'>
            <label>Email</label>
            <input type='text' placeholder='Enter your email.....' />
            <label>Password</label>
            <input type="password" placeholder='Enter your Password...' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='registerbutton'>Register</button>
    </div>
  )
}

export default Login