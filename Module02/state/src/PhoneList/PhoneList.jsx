import React from 'react';
import PropTypes from 'prop-types';
import PhoneListItem from "../PhoneListItem/PhoneListItem"
import "./PhoneList.css"

const PhoneList = ({phones, addToCart}) => {
    return (
        <div className = "container">
            {phones.map(el => <PhoneListItem phone = {el} addToCart = {addToCart} key = {el.title}/>)}
        </div>
    );
};

PhoneList.propTypes = {
    
};

export default PhoneList;