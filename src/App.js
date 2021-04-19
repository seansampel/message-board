import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import CommentBar from './components/CommentBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p
          id="Title">
          
      </p>
      <Navbar />
        <form 
          type="value"
        >
        <CommentBar />  
        <Button />
        </form>
      </header>
    </div>
  );
}

export default App;
