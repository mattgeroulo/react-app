import logo from './logo.svg';
import './App.css';
import React from 'react'

function MyButton({onClick,name}){
    // Event handler function
    return (
      <button onClick={() => onClick(name)}>
        Click Me
      </button>
    );
  }

function App() {
  const handleClick = (name) => {
    console.log('Button clicked with name:', name);
  };
  return (
    <div>
      <div className = "App-header">
        <h1> About Me</h1>
      </div>
      <div className ="app-container">
        <h2> Hello world</h2>
       
      </div>
      <MyButton onClick={handleClick} name ="hello world"/>
    </div>
  );
}

export default App;
