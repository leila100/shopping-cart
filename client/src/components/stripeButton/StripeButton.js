import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { clearCart } from "../../redux/cart/cartActions";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_lTb9H3cC6IOEaOWOPPXgc2Bp00gR4r5Jhg";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful!");
        clearCart();
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert("There was an issue processing your payment. please be sure you use the provided credit card.");
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Shopping Cart Ltd.'
      billingAddress
      shippingAddress
      image='https://icon2.cleanpng.com/20171220/jpe/shopping-cart-png-5a3a8fca5f1485.3449050215137873383895.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
