import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({
  inputTask,
  inputChange,
  formSubmit,
  showAllTasks,
  showCompleteTasks,
  showUncompleteTasks
}) => {
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        className="text"
        name="inputTask"
        placeholder="Enter new task"
        value={inputTask}
        onChange={inputChange}
      />
      <input type="submit" className="btn" />
      <button type="button" onClick={showAllTasks}>
        Show all tasks
      </button>
      <button type="button" onClick={showCompleteTasks}>
        Show complete tasks
      </button>
      <button type="button" onClick={showUncompleteTasks}>
        Show uncomplete tasks
      </button>
    </form>
  );
};

Form.propTypes = {};

export default Form;
