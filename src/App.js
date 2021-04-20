import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Post from './components/Post';
import firebase from 'firebase/app';
import 'firebase/database';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

  const config = 
  {
    apiKey: "AIzaSyCZ44G6JHd8ZPQLuZ-JC1ekJrVeX9tPmYE",
    authDomain: "message-board-15cf4.firebaseapp.com",
    databaseURL: "https://message-board-15cf4-default-rtdb.firebaseio.com",
    projectId: "message-board-15cf4",
    storageBucket: "message-board-15cf4.appspot.com",
    messagingSenderId: "1014284863333",
    appId: "1:1014284863333:web:dc95725d3c5d613169438c",
    measurementId: "G-ZQ6EE0ZEZC"
  };

  this.app = firebase.initializeApp(config);
  this.database = this.app.database();
  };

  render() {
    return (
    <div className="App">
        <header className="App-header">
        <Navbar />
        <div id="tag-line">
        <h3><p>music discussion forum only...</p></h3>
        </div>
        <div>
        <Post id="post-box" />
        <Button />
        </div>
        </header>
        <div><p>Here is some text</p></div>
        <footer id="copyright"><h6>&copy;SampelMedia</h6></footer>
      </div>  
    )
  }
};

export default App;
