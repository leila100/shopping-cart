import React from "react";
import { connect } from "react-redux";

import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";

import "./cartDropdown.styles.scss";

const CartDropdowm = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdowm);
