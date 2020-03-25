import React from "react";
import { connect } from "react-redux";

import { clearItem } from "../../redux/cart/cartActions";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
