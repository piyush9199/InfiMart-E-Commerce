import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext([])

export function ProductsProvider({children}){
    const [products, setProducts] = useState(PRODUCTS)      //initial state=PRODUCTS array
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

