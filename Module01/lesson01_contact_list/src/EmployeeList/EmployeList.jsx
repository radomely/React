import React from "react";
import PropTypes from 'prop-types';
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import "./EmployeeList.css";

const EmployeeList = ({userData}) => {
    console.log(userData)
    return(
        <ul className = "EmployeeList">
            {userData.map(el => <EmployeeListItem title = {el.name + " " + el.surname} text = {el.position} key ={el.surname}/>)}
        </ul>
    );
};

EmployeeList.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
        }),
    ),
}

export default EmployeeList;