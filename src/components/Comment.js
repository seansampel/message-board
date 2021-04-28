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
    <div className="comment box">
      <Post onSubmit={newComment} />
      {/* <AddComment 
        // className="comment-box"
        addComments={addComments} 
        completeComment={completeComment}
      /> */}
      <p id="comment-box">
      <AddComment 
        onSubmit={newComment}
        className="comment-box"
        addComments={addComments} 
        completeComment={completeComment}
      />
       </p>
    </div>
  )
}

export default Comment;