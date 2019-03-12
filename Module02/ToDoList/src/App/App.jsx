import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import TaskItem from '../TaskItem/TaskItem';
import Table from '../Table/Table';
import './App.css';

class App extends Component {
    state = {
        inputTask: '',
        taskList: [], //tasks
        whatToShow: [],
    }
    inputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]: value,
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        // if(this.state.inputTask) {return};
        let newTask = {
            id: Date.now(),
            taskContent: this.state.inputTask, //taskContent: e.target.text.value
            done: false,
        }
        let arrTasks = [];
        if(localStorage.getItem("tasks")) {
            arrTasks = [...JSON.parse(localStorage.getItem("tasks")), newTask];
            localStorage.setItem("tasks", JSON.stringify(arrTasks));
        } else {
            localStorage.setItem("tasks", JSON.stringify([newTask]));
        }
        this.setState(prev=>({
            inputTask: '',
            taskList: [...prev.taskList, newTask],
            whatToShow: [...prev.whatToShow, newTask],
        }))
        console.log(newTask);
    };

    deleteTask = (e) => {
        const ID = Number(e.target.parentNode.parentNode.id);
        const delTask = this.state.taskList.filter(el => el.id !== ID);
        this.setState(() => ({ taskList: delTask, whatToShow: delTask }));
    };

    editTask = (e) => {
        const btn = e.target;
        const taskID = Number(btn.parentNode.parentNode.id);
        
        if(btn.innerText === 'Edit'){
            const input = document.createElement('input');
            input.value = btn.parentNode.parentNode.firstChild.innerText;
            btn.parentNode.before(input);
            btn.parentNode.parentNode.firstChild.remove();
            btn.innerText = 'Submit';
        } else {
            const span = document.createElement('span');
            span.innerText = btn.parentNode.parentNode.firstChild.value;
            btn.parentNode.before(span);
            btn.parentNode.parentNode.firstChild.remove();
            btn.innerText = 'Edit';
            const editTask = this.state.taskList.map(el => el.id === taskID ? {...el, text: span.innerText} : el);
            this.setState(() => ({ taskList: editTask, whatToShow: editTask }));
        };
    };

    doneTask = (e) => {
        e.target.classList.toggle('crossed');
        const taskID = Number(e.target.parentNode.id);
        const doneTask = this.state.taskList.map(el => el.id === taskID? {...el, done: !el.done} : el);
        console.log(doneTask);
        this.setState(() => ({ taskList: doneTask, whatToShow: doneTask,}));
    };

    showAllTasks = (e) => {
        console.log('showAllTasks is working now!');
        this.setState(() => ({ whatToShow: this.state.taskList }));
    };
    showCompleteTasks = (e) => {
        console.log('showCompleteTasks is working now!');
        const filteredTasks = this.state.taskList.filter(el => el.done);
        this.setState(() => ({ whatToShow: filteredTasks }));
    };
    showUncompleteTasks = (e) => {
        console.log('showUncompleteTasks is working now!');
        const filteredTasks = this.state.taskList.filter(el => !el.done);
        this.setState(() => ({ whatToShow: filteredTasks }));
    };

    render() {
        const {inputTask, whatToShow} = this.state;
        return (
            <div className="App">
                <h1>To Do list</h1>
                <Form inputTask = {inputTask} inputChange = {this.inputChange} formSubmit = {this.formSubmit}
                 showAllTasks={this.showAllTasks} showCompleteTasks={this.showCompleteTasks} showUncompleteTasks={this.showUncompleteTasks}/>
                <Table taskList={whatToShow} deleteTask={this.deleteTask} editTask={this.editTask} doneTask={this.doneTask}/>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;