import React from 'react';
import './write.css';

const Write = () => {
  return (
    <div className='write'>
        <img src='https://cdn.mos.cms.futurecdn.net/9262cnpAxWZYGozEBk8wJG-1200-80.jpg' alt='' className='writeimg' />
        <form className='writeform'>
            <div className='writefromgroup'>
                <label htmlFor='fileinput'>
                <i className="writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display:'none'}}/>
                <input type="text" placeholder='Title' className='writeinput' autoFocus={true} />
            </div>

            <div className='writefromgroup'>
                <textarea type="text" placeholder='Tell Your Story.....' className='writeinput writetext'></textarea>
            </div>
            <button className='writesubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write