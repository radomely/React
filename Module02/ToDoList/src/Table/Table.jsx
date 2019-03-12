import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import './Table.css';

const Table = ({taskList, deleteTask, editTask, doneTask}) => {
    return (
        <table className='ToDoList'>
            {taskList.map(el => <TaskItem taskObj = {el} key ={el.id} deleteTask={deleteTask} editTask={editTask} doneTask={doneTask}/>)}
        </table>
    );
};

Table.propTypes = {
    
};

export default Table;