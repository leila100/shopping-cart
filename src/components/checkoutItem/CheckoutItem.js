import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";
import {
  CheckoutItemContainer,
  ImageContainer,
  Info,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from "./checkoutItem.styles";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt='item' src={imageUrl} />
      </ImageContainer>
      <Info>{name}</Info>
      <Quantity>
        <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </Quantity>
      <Info>{price}</Info>
      <RemoveButton onClick={() => dispatch(clearItem(cartItem))}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default connect()(CheckoutItem);
