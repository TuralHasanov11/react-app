import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    favoritesCount:0,
    addFavorite: (post)=>{},
    removeFavorite: (postId)=>{},
    postIsFavorite: (postId)=>{}
})

export function FavoritesContextProvider(props){

    const [favoritesContainer, setFavoritesContainer] = useState([])

    function addFavorite(post){
        setFavoritesContainer((prevFavoritesContainer)=>{
            return prevFavoritesContainer.concat(post)
        })
    }

    function removeFavorite(postId){
        setFavoritesContainer((prevFavoritesContainer)=>{
            return prevFavoritesContainer.filter(post => post.id !== postId)
        })
    }

    function postIsFavorite(postId){
        return favoritesContainer.some(post => post.id === postId)
    }

    return <FavoritesContext.Provider value = {{
            favorites: favoritesContainer,
            favoritesCount: favoritesContainer.length,
            addFavorite: addFavorite,
            removeFavorite: removeFavorite,
            postIsFavorite: postIsFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
}

export default FavoritesContext