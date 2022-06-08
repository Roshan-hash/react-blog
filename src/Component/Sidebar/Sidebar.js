import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img  className="sidebarImg" src='https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_burbank_white.jpg?v=1650310323' alt=''/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text 
                 ever since the 1500s, when an unknown printer took a galley of type
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
            <li className='sidebarListItem'>
                Life
            </li>
            <li className='sidebarListItem'>
                Music
            </li>
            <li className='sidebarListItem'>
                Tech
            </li>
            <li className='sidebarListItem'>
                Style
            </li>
            <li className='sidebarListItem'>
                Cinema
            </li>
        </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
              <i className="sidebarIcon fa-brands fa-facebook-f"></i>
              <i className="sidebarIcon fa-brands fa-twitter"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
              <i className="sidebarIcon fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar