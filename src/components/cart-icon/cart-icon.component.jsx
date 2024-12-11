import './cart-icon.styles.scss'
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg'

export function CartIcon(){
    return (
        <div className= "cart-icon-container">
            <CartSvg className='shopping-icon'/>
            <span className='item-count'>1</span>
        </div>
    )
}