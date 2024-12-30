// Separate context component to avoid unnecessary re-renders
import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const actions = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

export const initialState = { currentUser: null };

function userReducer(state, action) {    
    switch (action.type) {
        case actions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            throw new Error(`Unhandled action type ${action.type} `)
    }
}


export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState)    
    
    function setCurrentUser(user){
        dispatch({ type: actions.SET_CURRENT_USER, payload: user })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
               const userDoc = await createUserDocumentFromAuth(user)  //new google users also                
               setCurrentUser(userDoc)            }
        })
        
        return unsubscribe;         //unmount to stop listening and avoid memory leaks
    }, [])
    
    // console.log(state.currentUser);
    
    return (
        <UserContext.Provider value={{ currentUser: state.currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}