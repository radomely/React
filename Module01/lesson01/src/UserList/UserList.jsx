import React from "react";
import PropTypes from 'prop-types';
import UserListItem from "../UserListItem/UserListItem";
import "./UserList.css";

const UserList = ({userData}) => {
    return(
        <ul className = "UserList">
            {userData.map(el => <UserListItem title = {el.title} text = {el.text} key ={el.title}/>)}
        </ul>
    );
};

UserList.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ),
}

export default UserList;