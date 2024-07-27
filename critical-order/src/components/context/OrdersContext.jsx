import { createContext, useState } from "react";



export const FavoritesContext = createContext(null)


export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([])

    const favOperation = (orders) => {
        let favControl = favorites.find(f => f.id === orders.id)

        if(favControl){
            let filteredFavorites = favorites.filter(f => f.id !== orders.id)
            setfavorites(filteredFavorites)
        }
        else{
            setfavorites([...favorites, orders])
        }
    }

    const clearFavorites = () => {
        setfavorites([])
    }


    return <FavoritesContext.Provider value={{favOperation, clearFavorites, favorites}}>{children}
    </FavoritesContext.Provider>


}