import { Button } from "@mui/material"
import './cart-dropdown.styles.scss'



export function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button className="custom-black-button">CHECKOUT</Button>
        </div>
    )
}