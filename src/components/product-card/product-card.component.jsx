import Button from '@mui/material/Button'
import './product-card.styles.scss'


export function ProductCard({product}){
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button variant="contained" className="custom-white-button" >
              Add to cart
            </Button>
        </div>
    )
}