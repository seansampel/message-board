import React, { useState } from 'react'
import '../styles/comment.css';
import Post from '../components/Post'; 
import AddComment from '../components/AddComment'; 

function Comment() {
  const [addComments, setAddComments] = useState([]);

  const newComment = addComment => {
    if(!addComment.text || /^\s*$/.test(addComment.text)) {
      return;
    }
    const newComments = [addComment, ...addComments]

    setAddComments(newComments);
    console.log(...addComments);
  };

  const completeComment = id => { 
    let updatedComments = addComments.map(addComment => {
      if (addComment.id === id) {
        addComment.isComplete = !addComment.isComplete;
      }
      return addComment;
    });
    setAddComments(updatedComments);
  };
 


  return (
    <div>
      <Post onSubmit={newComment} />
      <AddComment 
        addComments={addComments} 
        completeComment={completeComment}
      />
    </div>
  )
}

export default Comment;