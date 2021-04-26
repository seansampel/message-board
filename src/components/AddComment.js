import React, { useState } from 'react'
import Post from '../components/Post'; 
import '../styles/button.css';
import { RiCloseLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function AddComment ({ posts, completeComment }) {
  const [newPosts, setNewPosts] = useState({
    id: null,
    value: ''
  }) 
    
  

  return newPosts.map((post, index) => (
    <div 
      className={post.isRendered ? 'Comment posted' : 'Comment-row'} 
      key={index}
    >
    <div key={posts.id} onClick={() => completeComment(posts.id)}>
    </div>
    <div className="icons" >
      <RiCloseLine />
      <TiEdit />

    </div>
    </div>
    ));
}

export default AddComment;