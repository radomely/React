import React from 'react';
import {connect} from 'react-redux';
import {add, sub, reset} from '../redux/actions/counterAction';
import './Counter.css';

const Counter = ({value, add, reset, substr, input}) => {
    return (
      <div className="container">
          <p className="text">{value}</p>
          <button onClick = {add}>+</button>
          <button onClick = {reset}>reset</button>
          <button onClick = {substr}>-</button>
      </div>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);