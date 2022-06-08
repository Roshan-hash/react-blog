import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='Register'>
        <span className='RegisterTitle'> Register </span>
        <form className='Registerform'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name.....' />
            <label>Email</label>
            <input type='text' placeholder='Enter your email.....' />
            <label>Password</label>
            <input type="password" placeholder='Enter your Password...' />
            <button className='RegisterButton'>Register</button>
        </form>
        <button className='loginbutton'><Link to='login' className='link'>Login</Link></button>
    </div>
  )
}

export default Register