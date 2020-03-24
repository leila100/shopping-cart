import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cartActions";

import "./cartIcon.styles.scss";

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: state.cart.cartItems.reduce((sum, nextItem) => sum + nextItem.quantity, 0)
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
