import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component'
import { PaymentForm } from '../../components/payment-form/payment-form.component'

export function Checkout() {
    const { cartItems, cartPrice } = useContext(CartContext);

    return (
        <div className='checkout-page'>
            <div className='checkout-container'>
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
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    })
                }
                <span className='total'>Total: {cartPrice}</span>
            </div>
            <div className='payment-container'>
                {
                    cartPrice > 0 ? <PaymentForm /> : null
                }
                
            </div>
        </div>
    )
}