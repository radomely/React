import React, { Component } from 'react';
import AddContactButton from './components/AddContactButton/AddContactButton';
import NewContactModal from './components/NewContactModal/NewContactModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddContactButton/>
        <NewContactModal/>
      </div>
    );
  }
}

export default App;
