import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./App.css";

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0,
    //     }
    // }
    state = {
        counter: 0,
    }
    increment = () => {
        // this.setState({
        //     counter: 5
        // })
        this.setState(prevState => ({
            counter: ++prevState.counter
        }))
        console.log("plus");
    }
    decrement = () => {
        this.setState(prevState => ({
            counter: --prevState.counter
        }))
        console.log("minus");
    }
    reset = () => {
        this.setState({
            counter: 0,
        })
    }
    render() {
        let {counter} = this.state;
        return (
            <div>
                <button className="btn" data-action="sub" onClick = {this.decrement}>-1</button>
                <span className="value">{this.state.counter}</span>
                <button className="btn" data-action="add" onClick = {this.increment}>+1</button>
                <button className="btn" data-action="add" onClick = {this.reset}>Reset</button>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;