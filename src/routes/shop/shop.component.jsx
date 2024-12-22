import { useContext } from "react"
import { ProductCard } from "../../components/product-card/product-card.component"
import { CategoriesContext } from "../../contexts/categories.context"
import './shop.styles.scss'

export function Shop(){
    const {categoryMap} = useContext(CategoriesContext)
    
    return (
        <div className="products-container">
            {
                // products.map((product)=>
                //     <ProductCard key={product.id} product={product} />                    
                // )
            }
        </div>
    )
}