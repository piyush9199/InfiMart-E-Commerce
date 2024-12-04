import './category-item.styles.scss'


export function CategoryItem({ category }) {               //{category} instead of category= destructuring
    return (
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})` }} ></div>
            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}