import './payment-form.styles.scss'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

export function PaymentForm() {
    const {cartPrice} = useContext(CartContext);
    const {currentUser} = useContext(UserContext);
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
            const clientSecret = response.paymentIntent.client_secret;
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Anonymous'
                    }
                }
            });
            if(paymentResult.error){
                alert(paymentResult.error);
            } else {
                if(paymentResult.paymentIntent.status === 'succeeded'){
                    alert('Payment successful')
                }
            }
    }

    return (
        <div className='payment-form-container' >
            <form className='form-container' onSubmit={paymentHandler}>
                <CardElement />
                <Button type='submit' variant='contained' className='button white payment-button'>Pay now</Button>
            </form>
        </div>
    )
}
