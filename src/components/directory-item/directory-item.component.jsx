import './directory-item.styles.scss'


export function DirectoryItem({ category }) {               //{category} instead of category= destructuring
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})` }} ></div>
            <div className="body">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}