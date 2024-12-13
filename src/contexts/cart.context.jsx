import { createContext } from "react";
import { useState, useEffect } from "react";

function addCartItem(cartItems, productToAdd){
                                                                                    //  find if item already exists using id
    let existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);
                                                                                            // if found quantity+1
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }
                                                                                     // return new array with modified cart items
    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartContext = createContext(null)

export function CartProvider({children}){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    function addItemToCart(productToAdd){
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(()=>{
        const totalCartQuantity = cartItems.reduce((total, cartItem)=>total + cartItem.quantity, 0)     //total cart quantity changes 
        setCartCount(totalCartQuantity)
    },[cartItems])                                                                                      //when cartItems change


    return (
        <CartContext.Provider value={{isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}} >
            {children}
        </CartContext.Provider>
    )
}