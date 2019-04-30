import React from 'react';
import './App.css';
import NavBar from './Componets/Nav-Bar/NavBar';
import PostManager from './Componets/Posts/PostManager';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar/>
        <PostManager />
      </div>
    </div>
  );
}

export default App;
