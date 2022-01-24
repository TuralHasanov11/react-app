import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'
import Posts from '../components/posts/Posts'

function Favorites(){

    const favoritesContext = useContext(FavoritesContext)

    let content;

    if(favoritesContext.favoritesCount === 0){
        content = <p>You have no favroties! Start adding some?</p>
    }else{
        content = <Posts posts={favoritesContext.favorites}/>
    }
    

    return <div>
        <h1>My favorites</h1>
        {content}
    </div>
}

export default Favorites