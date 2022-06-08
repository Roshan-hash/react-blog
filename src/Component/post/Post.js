import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src='https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/basic-information-about-plants.jpg' alt='' />
        < div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
             <Link to='post' className='link'>It is a long established here.</Link>
            </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
        It is a long established fact that a reader will be distracted by the 
        readable content of a page when looking at its layout. The point of 
        using Lorem Ipsum is that it has a more-or-less normal distribution of 
        letters, as opposed to using..... <span className='readmore'>Read More</span>
        </p>
    </div>
  )
}

export default Post