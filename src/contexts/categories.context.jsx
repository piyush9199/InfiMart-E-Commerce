import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export function CategoriesProvider({children}){
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])

    return (
        <CategoriesContext.Provider value={{categoriesMap}}>
            {children}
        </CategoriesContext.Provider>
    )
}

