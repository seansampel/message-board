import React, { useState } from 'react'
import Post from './Post'; 
import '../styles/button.css';
import { RiCloseLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

const AddComment = ({ addComments, completeComment, updateAddComment }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
   
const submitUpdate = value => {
  updateAddComment(edit.id, value);
  setEdit({
    id: null, 
    value: ''
  });
};

if (edit.id) {
  return <Post edit={edit} onSubmit={submitUpdate} />;
}

  return addComments.map((addComment, index) => (
    <div 
      id="comment-box"
      className={addComment.isPosted ? 'Comment posted' : 'Comment-row'} 
      key={index}
    >
    <div key={addComment.id} onClick={() => completeComment(addComment.id)}>
      {addComment.text}
    </div>
    <div className="icons" >
      <RiCloseLine 
      placeholder="Delete" />
    </div>
    </div>
    ));
}

export default AddComment;