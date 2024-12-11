import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext(null)

export function CartProvider({children}){
    const [isCartOpen, setIsCartOpen] = useState(false)


    return (
        <CartContext.Provider value={{isCartOpen, setIsCartOpen}} >
            {children}
        </CartContext.Provider>
    )
}