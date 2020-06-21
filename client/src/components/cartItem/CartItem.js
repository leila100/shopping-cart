import React from "react";

import { CartItemContainer, ItemDetails, Name } from "./cartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
