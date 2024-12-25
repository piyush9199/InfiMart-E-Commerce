import './category-preview.styles.scss'
import { ProductCard } from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

// title and products PROPs catch using Parameters
export function CategoryPreview({ title, products }) {

    return (
        <div className="category-preview-container">
            <h2>
                <Link to={`/shop/${title}`} className="title">{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products.filter((_, index) => index < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}