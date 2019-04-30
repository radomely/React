import React from "react";
import PropTypes from 'prop-types';
import "./UserListItem.css";

const UserListItem = ({title, text}) => {
    return(
        <li>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
};
UserListItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default UserListItem;