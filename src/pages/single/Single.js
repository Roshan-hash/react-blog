import React from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Singlepost from '../../Component/Singlepost/Singlepost';
import './single.css';

const Single = () => {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}

export default Single