import React from "react";
import "./BasketItem.css";
import PropTypes from "prop-types";

const BasketItem = ({ cartOne, removefromCart }) => {
  return (
    <li>
      <p className="card__title">{cartOne.title}</p>
      <p className="price">{cartOne.price} UAH</p>
      <p
        className="BasketButton"
        data-name={cartOne.title}
        onClick={removefromCart}
      >
        X
      </p>
    </li>
  );
};

BasketItem.propTypes = {};

export default BasketItem;
