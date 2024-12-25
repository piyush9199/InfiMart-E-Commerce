import { Button } from "@mui/material"
import './cart-dropdown.styles.scss'
import { CartItem } from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import { useNavigate } from "react-router-dom"


export function CartDropdown() {
    const {cartItems} = useContext(CartContext)
    let navigate = useNavigate()

    function goToCheckout(){
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                cartItems.length? 
                (cartItems.map((item)=>
                    (<CartItem key={item.id} cartItem={item} />)
                ))
                :
                (
                    <span className="empty-cart-message">Your cart is empty</span>
                )
            }
            </div>
            <Button onClick={goToCheckout} className="custom-black-button">CHECKOUT</Button>
        </div>
    )
}