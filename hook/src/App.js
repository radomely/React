import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Button/>
       <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default App;
