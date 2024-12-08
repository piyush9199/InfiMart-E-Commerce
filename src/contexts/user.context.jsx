// Separate context component to avoid unnecessary re-renders
import { createContext, useState } from "react";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null
})

export function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}