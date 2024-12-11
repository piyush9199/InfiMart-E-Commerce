import './cart-icon.styles.scss'
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


export function CartIcon(){
    const { isCartOpen, setIsCartOpen } = useContext(CartContext) 

    function toggleCartOpen(){
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className= "cart-icon-container" onClick={toggleCartOpen} >
            <CartSvg className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}