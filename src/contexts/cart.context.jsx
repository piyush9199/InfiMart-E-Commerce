import { createContext, useReducer } from "react";
import { useEffect } from "react";

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

export const CartContext = createContext();

const initialState = {
    cartCount: 0,
    cartPrice: 0,
    cartItems: [],
    isCartOpen: false,
}

function cartReducer(state, action){
    switch(action.type){
        case 'SET_CART_ITEMS':
            return{
                ...state,
                cartItems: action.payload
            }
        case 'SET_CART_COUNT':
            return{
                ...state,
                cartCount: action.payload
            }
        case 'SET_CART_PRICE':
            return{
                ...state,
                cartPrice: action.payload
            }
        case 'SET_IS_CART_OPEN':
            return{
                ...state,
                isCartOpen: action.payload
            }
        default:
            throw new Error(`Unhandled ${action.type} in cartReducer`)
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const { isCartOpen, cartItems, cartCount, cartPrice } = state;
    
    function addItemToCart(productToAdd) {
        const newCartItems = addCartItem(cartItems, productToAdd);
        dispatch({ type: 'SET_CART_ITEMS', payload: newCartItems })
    }

    function removeItemFromCart(productToRemove) {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        dispatch({ type: 'SET_CART_ITEMS', payload: newCartItems })
    }

    function clearItemFromCart(productToClear) {
        const newCartItems = clearCartItem(cartItems, productToClear);
        dispatch({ type: 'SET_CART_ITEMS', payload: newCartItems })
    }

    function setIsCartOpen(boolean){
        dispatch({type: 'SET_IS_CART_OPEN', payload: boolean})
    }

    useEffect(() => {
        const totalCartQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)     //total cart quantity changes 
        dispatch({type: 'SET_CART_COUNT', payload: totalCartQuantity})
    }, [cartItems])
    //when cartItems change

    useEffect(() => {
        const totalCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)     //total cart quantity changes 
        dispatch({type: 'SET_CART_PRICE', payload: totalCartPrice})
    }, [cartItems])                                                                                      //when cartItems change


    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartPrice }} >
            {children}
        </CartContext.Provider>
    )
}