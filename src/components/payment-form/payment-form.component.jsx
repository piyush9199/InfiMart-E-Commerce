import './payment-form.styles.scss'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mui/material'

export function PaymentForm(){
    const stripe = useStripe();
    const elements = useElements();

    async function paymentHandler(e){
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
    }

    return (
        <div className='payment-form-container'>
            <div className='form-container'>
                <CardElement />
            </div>
            <Button type='submit' variant='contained' className='button white payment-button'>Pay now</Button>
        </div>
    )
}
