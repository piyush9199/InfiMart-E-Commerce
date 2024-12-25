import { useContext } from "react"
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
import { CategoriesContext } from "../../contexts/categories.context"


export function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <div>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];      //not categoriesMap.title cz title is a variable, not a literal key
                                                                //Bracket notation categoriesMap[title] dynamically accesses the value
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }


        </div>
    )
}