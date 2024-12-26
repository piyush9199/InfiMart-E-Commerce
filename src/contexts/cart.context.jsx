import { createContext } from "react";
import { useState, useEffect } from "react";

function addCartItem(cartItems, productToAdd) {
    //  find if item already exists using id
    let existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    // if found quantity+1
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    // return new array with modified cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

function removeCartItem(cartItems, productToRemove) {
    //  find if item already exists using id
    let existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    // if quantity=1 remove the item from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    }
    //else return with quantity-1
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

function clearCartItem(cartItems, productToClear) {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    cartPrice: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
});

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    function addItemToCart(productToAdd) {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    function removeItemFromCart(productToRemove) {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    function clearItemFromCart(productToClear) {
        setCartItems(clearCartItem(cartItems, productToClear))
    }



    useEffect(() => {
        const totalCartQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)     //total cart quantity changes 
        setCartCount(totalCartQuantity)
    }, [cartItems])
    //when cartItems change
    useEffect(() => {
        const totalCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)     //total cart quantity changes 
        setCartPrice(totalCartPrice)
    }, [cartItems])                                                                                      //when cartItems change


    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartPrice }} >
            {children}
        </CartContext.Provider>
    )
}