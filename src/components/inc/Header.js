import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
import AuthContext from '../../store/auth-context'


function Header(){

    const favoritesContext = useContext(FavoritesContext)
    const authCtx = useContext(AuthContext)

    function logout(){
        authCtx.logout()
    }

    return <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className={`nav-link ${({isActive}) => (isActive ? "active" : '')}}`} to={'/'}>All Meetups</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link ${({isActive}) => (isActive ? "active" : '')}}`} to={'/add-meetup'}>Add Meetups</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link ${({isActive}) => (isActive ? "active" : '')}}`} to={'/favorites'}>Favorites <span className='badge bg-danger'>{favoritesContext.favoritesCount}</span></NavLink>
                </li>
                {authCtx.isAuthenticated ? 
                    <>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${({isActive}) => (isActive ? "active" : '')}}`} to={'/profile'}>Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <button onClick={logout} className='btn btn-danger'>Logout</button>
                        </li>
                    </> : 
                    <>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${({isActive}) => (isActive ? "active" : '')}}`} to={'/auth'}>Authentication</NavLink>
                        </li>
                    </>}
            </ul>
            </div>
        </div>
        </nav>
    </header>
}

export default Header