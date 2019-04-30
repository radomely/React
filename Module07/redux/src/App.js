import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from './redux/Form/Form';
import './App.css';
import Gallery from './redux/Gallery/Gallery';
import * as actions from './redux/actions/counterAction';

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
        <Gallery/>
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
      dispatch(actions.add(5))
    },
    substr: function () {
      dispatch(actions.sub(3))
    },
    reset: function() {
      dispatch(actions.reset())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
