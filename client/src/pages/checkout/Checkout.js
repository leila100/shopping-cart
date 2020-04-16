import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeButton from "../../components/stripeButton/StripeButton";
import { CheckoutContainer, Header, HeaderBlock, Total, TestWarning } from "./checkout.styles";

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>
        <span>Total: ${cartTotal}</span>
      </Total>
      <TestWarning>
        *Please use the following test credit cart for payments*
        <br />
        4242 4242 4242 4242 - Exp: any date in future - CVV: 123
      </TestWarning>
      <StripeButton price={cartTotal} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
