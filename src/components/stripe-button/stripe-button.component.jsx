import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
 const priceForStripe = price * 100;
 const publishableKey = 'pk_test_51IBWOAIGBdXhz29TWRY6MjXouhgfvf3wtJMx3b3hwEozhBQ1so2qxP5WpFLdBwMX0IpIdJsC2LJ0EmKwkBAYHqEF005V3RV8A9';

 const onToken = roken => {
  alert('Payment Succesful');
 }
 return (
  <StripeCheckout 
  label= 'Pay Now'
  name = 'Crown Clothing Ltd.'
  billingAddress
  shippingAddress
  description={`Your total is $${price}`}
  amount={priceForStripe}
  panelLabel='Pay Now'
  token={onToken}
  stripeKey={publishableKey}
  />
 )
}

export default StripeCheckoutButton;
