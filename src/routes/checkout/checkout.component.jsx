import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


export function Checkout() {
    const { cartItems } = useContext(CartContext)

    return (
        <div>
            <h1>Checkout page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <div key={cartItem.id} >
                                <h2>{cartItem.name}</h2>
                                <span>{cartItem.quantity}</span>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}