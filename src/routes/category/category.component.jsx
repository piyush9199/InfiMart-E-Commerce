import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';

export function Category() {
    const Params = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[Params.category])
    }, [Params, categoriesMap])


    return (
        <div>
            <h2 className='category-title'>{Params.category.toUpperCase()}</h2>

            <div className='category-container'>
                {
                    products?.map((product) =>                         //products=undefined error?? use optional chaining(?)
                        <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}