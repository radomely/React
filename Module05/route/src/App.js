import React, { Component } from 'react';
import Header from './Header/Header';
import {Switch, Route} from 'react-router-dom';
import Internet from './Internet/Internet';
import Computer from './Computer/Computer';
import Programming from './Programming/Programming'
import User from './User/User';
import './App.css';


class App extends Component {
  state = {
    user: {},
  }
  fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => this.setState({
      user: data.results[0],
    }))
    .catch(err => console.log(err))
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Internet}/>
          <Route path='/Computer' component={Computer}/>
          <Route path='/Programming' component={Programming}/>
          <Route path='/user' render={props => <User userData = {user} {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
