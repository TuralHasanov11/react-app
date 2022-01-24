import {Link} from 'react-router-dom'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
import classes from './Header.module.css'

function Header(){

    const favoritesContext = useContext(FavoritesContext)

    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>All Meetups</Link>
                </li>
                <li>
                    <Link to={'/add-meetup'}>Add Meetups</Link>
                </li>
                <li>
                    <Link to={'/favorites'}>Favorites <span className={classes.badge}>{favoritesContext.favoritesCount}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header