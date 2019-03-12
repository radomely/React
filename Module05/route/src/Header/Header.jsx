import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink className="menu-link" to="/">Internet</NavLink>
                </li>
                <li>
                    <NavLink className="menu-link" to="/Computer">Computer</NavLink>
                </li>
                <li>
                    <NavLink className="menu-link" to="/Programming">Programming</NavLink>
                </li>
                <li>
                    <NavLink className="menu-link" to="/User">User</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;