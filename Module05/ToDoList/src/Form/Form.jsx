import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './Form.css';

const Form = ({inputTask, inputChange, formSubmit, showAllTasks, showCompleteTasks, showUncompleteTasks}) => {
    return (
        <form onSubmit = {formSubmit}>
            <input type="text" className="text" name="inputTask" placeholder="Enter new task" value = {inputTask} onChange = {inputChange}/>
            <input type="submit" className="btn"/>
            <NavLink className="menu-link" to="/" onClick={showAllTasks}>Show all tasks</NavLink>
            <NavLink className="menu-link" to="/Done" onClick={showCompleteTasks}>Show complete tasks</NavLink>
            <NavLink className="menu-link" to="/Undone" onClick={showUncompleteTasks}>Show uncomplete tasks</NavLink>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;