import React from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingWrapper'>
           <div className='settingsTitle'>
               <span className='settingsupdatetitle'>Update Your Account</span>
               <span className='settingdeletetitle'>Delete Account</span>
           </div>
           <form className='settingsform'>
               <label className="settingtitle">Profile Picture</label>
               <div className='settingsPP'>
                   <img src='https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg?cs=srgb&dl=pexels-pixabay-35196.jpg&fm=jpg' alt=''></img>
                   <label htmlFor='fileinput'>
                     <i className="settingPPicon fa-solid fa-circle-user"></i>
                   </label>
               </div>
                   <input type='file' id="fileinput" style={{display: 'none'}}></input>
                   <label>User Name</label>
                   <input type='text' placeholder='Alex Smith...' />
                   <label>User Email</label>
                   <input type='email' placeholder='alexsmith@gmail.com' />
                   <label>Password</label>
                   <input type='password'/>
                   <button className='settingssubmit'>Update</button>
           </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings