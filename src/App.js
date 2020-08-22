import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  };

  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Kanthi"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="" style={style}>My heading: {2 + 5 * 25 + 65}</h1>
        <h2>Heading: {person.name + " "+person.job}</h2>
        <h3 style = {{backgroundColor:'cyan',color:'yellow'}}>Singer: {person2.name + " "+person2.name}</h3>
        <p>My first React Paragraph</p>
      </header>
    </div>
  );
}

export default App;
