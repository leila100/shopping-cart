import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
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
      .then((response) => alert("Payment Successful!"))
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

export default StripeCheckoutButton;
