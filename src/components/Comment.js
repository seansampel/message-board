import React, { useState } from 'react'
import '../styles/comment.css';
import Post from '../components/Post'; 
import AddComment from '../components/AddComment'; 

function Comment() {
  const [comments, setComments] = useState('');

  const newComment = comment => {
    if(!comment.text || /^\s*$/.test(comment.text)) {
      return 
    }
    const newComments = [comment, ...comments]

    setComments(newComments);
  };

  const completeComment = id => { 
    let updatedComments = newComment.map(comments => {
      if (comments.id === id) {
        newComment.isComplete = !newComment.isComplete;
      }
      return comments;
    });
    setComments(updatedComments);
  };
 


  return (
    <div>
      <Post onSubmit={newComment}/>
      <AddComment comments={comments} completeComment={completeComment}
      />
    </div>
  )
}

export default Comment;