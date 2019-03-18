import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add, sub, reset} from './redux/actions/counterAction';
import Form from './redux/Form/Form';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    let {value, add, reset, substr, input} = this.props;
    return (
      <div className="container">
        <p className="text">{value}</p>
        <button onClick = {add}>+</button>
        <button onClick = {reset}>reset</button>
        <button onClick = {substr}>-</button>
        <Form/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    value: state.counter,
    input: state.input,
  }
}
function mapDispatchToProps (dispatch) {
  return{
    add: function() {
      dispatch(add(5))
    },
    substr: function () {
      dispatch(sub(3))
    },
    reset: function() {
      dispatch(reset())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
