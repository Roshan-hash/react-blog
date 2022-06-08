import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React &  Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className="headerImg" src="https://st4.depositphotos.com/12782918/39648/i/600/depositphotos_396483532-stock-photo-beautiful-wild-flower-field-summer.jpg" alt="" />
    </div>
  )
}

export default Header