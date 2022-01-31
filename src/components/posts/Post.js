import Card from '../ui/Card'
import classes from './Post.module.css'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
import { Link } from 'react-router-dom'

function Post(props){

    const favoritesContext = useContext(FavoritesContext)

    const postIsFavorite = favoritesContext.postIsFavorite(props.id)

    function toggleFavoritePost(){
        if(postIsFavorite){
            favoritesContext.removeFavorite(props.id)
        }else{
            favoritesContext.addFavorite({
                id:props.id,
                title:props.title,
                image:props.image,
                description:props.description,
            })
        }
    }

    return <li className={classes.item}>
       <Card>
        <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <Link to={`posts/${props.id}`}>More Info</Link>
                <button onClick={toggleFavoritePost}>
                    {postIsFavorite?'Remove from Favorites':'To Favorites'}
                </button>
            </div>
       </Card>
    </li>
}

export default Post