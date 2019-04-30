import React from 'react';
import {connect} from 'react-redux';

import './NewContactModal.css';
import personImg from './person.png';

const NewContactModal = () => {
    return (
        <form> 
            <label>First Name <input type="text" placeholder="John"/></label>
            <label>Last Name <input type="text" placeholder="Doe"/></label>
            <label>Phone Number <input type="text" placeholder="+380123456789"/></label>
            <label>Email Address <input type="text" placeholder="johndoe@example.com"/></label>
            <label>Date of Birth <input type="text" placeholder="7th January 1999"/></label>
            <img src={`${personImg}`} alt=""/>
            <input type="submit" value="Save Contact"/>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewContactModal);