import './payment-form.styles.scss'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

export function PaymentForm() {
    const { cartPrice } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const [billingAddress, setBillingAddress] = useState(null);
    // console.log(currentUser);


    const stripe = useStripe();
    const elements = useElements();

    async function paymentHandler(e) {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: cartPrice * 100 })
        })
            .then(res => res.json());

        const address =
            billingAddress && billingAddress.address
                ? billingAddress.address
                : billingAddress || {};

        const clientSecret = response.paymentIntent.client_secret;
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.email : 'Anonymous',
                    address,
                }
            }
        });
        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful')
                alert(`please note your transaction id ${paymentResult.paymentIntent.client_secret}`)
            }
        }
    }

    return (
        <div className='payment-form-container' >
            <form className='form-container' onSubmit={paymentHandler}>
                <AddressElement
                    options={{ mode: 'billing' }}
                    onChange={(event) => {
                        if (event.complete) {
                            setBillingAddress(event.value);
                        }
                    }}
                />
                <div className='card-element-container'>
                    <CardElement />
                </div>
                <p className='sample-card-details'>Use card '4242 4242 4242 4242' with any future date, cvc, zip</p>
                <Button type='submit' variant='contained' className='button white payment-button'>Pay now</Button>
            </form>
        </div>
    )
}
