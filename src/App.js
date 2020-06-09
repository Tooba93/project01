import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div> 
          Hello World Updated App.js {name} Age={age - 1}
          <br/>
          <Hello firstName={name}></Hello>
        </div> 
}

export default App;
