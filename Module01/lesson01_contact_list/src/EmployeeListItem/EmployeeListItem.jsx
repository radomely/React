import React from "react";
import PropTypes from "prop-types";
import "./EmployeeListItem.css";

const EmployeeListItem = ({ title, text }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};
EmployeeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default EmployeeListItem;
