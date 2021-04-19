import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p
          id="Title">
          Screddit
      </p>
      <Navbar />
        <form 
          type="value"
        >
          <input ></input>
        <Button />
        </form>
      </header>
    </div>
  );
}

export default App;
