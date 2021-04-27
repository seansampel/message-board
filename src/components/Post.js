import { useState } from 'react'
import '../styles/post.css';

function Post (props) {
  const [posts, setPosts] = useState('');

  const handleChange = e => {
    setPosts(e.target.value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: posts
  })
    setPosts('');
  };

  return (
    <div>
      <form className="comment-area" onSubmit={handleSubmit}>
        <textarea       
        type="text"
        id="post-box"
        placeholder="create your post..."
        onChange={handleChange}
        value={posts}
        ></textarea>
    <div>
        <button id="button"
        onClick={handleChange}
        >Post</button> 
        <p id="comment-box"> </p>
        
    </div>
      </form>
    </div>
  )
  };


export default Post;