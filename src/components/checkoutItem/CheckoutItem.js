import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
