import { useContext } from "react"
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
import { CategoriesContext } from "../../contexts/categories.context"
import './shop.styles.scss'

export function Shop() {
    const { categoriesMap } = useContext(CategoriesContext)
    // console.log(categoriesMap);
    
    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    // products is an ARRAY
                    
                    return (
                        // passing title and products PROP to CategoryPreview Component
                        <CategoryPreview title={title} products={products} />
                    )
                })
            }


        </div>
    )
}