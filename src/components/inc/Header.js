import {Link, useLocation} from 'react-router-dom'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
import classes from './Header.module.css'

function Header(){

    const location = useLocation()

    const favoritesContext = useContext(FavoritesContext)

    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link className={location.pathname === '/'?'active':''} to={'/'}>All Meetups</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/add-post'?'active':''} to={'/add-meetup'}>Add Meetups</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/favorites'?'active':''} to={'/favorites'}>Favorites <span className={classes.badge}>{favoritesContext.favoritesCount}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header