import './checkout-item.styles.scss'

export function CheckoutItem({cartItem}){
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt="#"/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>{cartItem.quantity}</span>
            <span className='price'>{cartItem.price}</span>
            <div className='remove-button'>&#x274C;</div>
        </div>
    )
}