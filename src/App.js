import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Navbar />
      <div>
      <Post id="post-box" />
      <Button />
      </div>
      </header>
    </div>
  );
}

export default App;
