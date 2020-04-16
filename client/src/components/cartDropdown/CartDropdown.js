import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleGoCheckout = () => {
    dispatch(toggleCartDropdown());
    history.push("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton onClick={handleGoCheckout}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
