import { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'

export function CheckoutItem({cartItem}){
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt="#"/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItemFromCart(cartItem)}>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div className='arrow' onClick={()=>addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{cartItem.price}</span>
            <div className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#x274C;</div>
        </div>
    )
}