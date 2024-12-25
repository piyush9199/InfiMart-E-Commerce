import { useNavigate } from 'react-router-dom'
import './directory-item.styles.scss'


export function DirectoryItem({ category }) {               //{category} instead of category= destructuring
    const navigate = useNavigate()
    function navigateHandler(){
        navigate(`/shop/${category.title.toLowerCase()}`)
    }
    return (
        <div className="directory-item-container" onClick={navigateHandler} >
            <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})` }} ></div>
            <div className="body">
                <h2>{category.title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}