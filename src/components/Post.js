import { useState } from 'react'
import '../styles/post.css';

function Post (props) {
  const [posts, setPosts] = useState('');

  const handleChange = e => {
    setPosts(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
    id: [Math.floor(Math.random() * 10000)],
    text: posts
  }); 
    setPosts('');
  };

  return (
    <div id="form-control">
      <form className="comment-area" onSubmit={handleSubmit}>
        <input       
        type="text"
        id="post-box"
        placeholder="create your post..."
        onChange={handleChange}
        value={posts}
        ></input>
    <div>
        <button id="button"
        onClick={handleSubmit}
        >Post</button> 
        
    </div>
      </form>
    </div>
  )
  };


export default Post;