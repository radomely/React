import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

const TaskItem = ({taskObj, deleteTask, editTask, doneTask}) => {
    return (
        <tr className='ToDoListItem' id={taskObj.id}>
            <td onClick={doneTask} className={taskObj.done ? 'crossed' : ''}>{taskObj.taskContent}</td>
            <td><button onClick={editTask}>Edit</button></td>
            <td><button onClick={deleteTask}>Delete</button></td>
        </tr>
    );
};

TaskItem.propTypes = {
    
};

export default TaskItem;