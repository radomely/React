import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";

const Header = ({text}) => {
    return(
        <header className="Header">
            {text}
        </header>
    );
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Header;