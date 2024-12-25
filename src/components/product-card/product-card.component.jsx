import Button from '@mui/material/Button'
import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


export function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext)

    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt='#' />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button variant="contained" className="button white" onClick={() => addItemToCart(product)} >
                Add to cart
            </Button>
        </div>
    )
}