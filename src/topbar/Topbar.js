import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-f"></i>
         <i className="topIcon fa-brands fa-twitter"></i>
         <i className="topIcon fa-brands fa-instagram"></i>
         <i className="topIcon fa-brands fa-youtube"></i>
        </div>
        <div className='topCenter'>
            <ul className='toplist'>
                <li className='topListItem'><Link className='link' to="/">HOME</Link></li>
                <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
                <li className='topListItem'><Link className='link' to="write">WRITE</Link></li>
                <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
                <li className='topListItem'>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className='topRight'>
          {user ? (
          <img className='topImg' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt=''></img>)
          :
            <ul className='toplist'>
                <li className='topListItem'><Link className='link' to="login">LOGIN</Link></li>
                <li className='topListItem'><Link className='link' to="register">REGISTER</Link></li>
            </ul>
          
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar