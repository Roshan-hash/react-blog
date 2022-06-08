import React from 'react';
import Header from '../../Component/header/Header';
import Posts from '../../Component/posts/Posts';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './home.css';

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='home'>
            <Posts/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Home