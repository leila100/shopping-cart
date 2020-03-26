import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeButton from "../../components/stripeButton/StripeButton";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>
        <span>Total: ${cartTotal}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit cart for payments*
        <br />
        4242 4242 4242 4242 - Exp: any date in future - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
