import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cartActions";

import "./cartIcon.styles.scss";

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
