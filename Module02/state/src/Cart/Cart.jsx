import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from '../BasketItem/BasketItem'
import "./Cart.css"

const Cart = ({isCartShow, toggleCart, cart, removefromCart}) => {
    return (

        <div className={isCartShow ? "Cart__hide Cart" : "Cart__hide"}>
        {/* <div className={"Cart__hide"}> */}
            <span className="close" onClick={toggleCart}>X</span>
            <ul>
                {cart.map(el => <BasketItem cartOne = {el} removefromCart = {removefromCart} key = {el.title}/>)}
            </ul>
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;