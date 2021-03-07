import { Link } from 'react-router-dom';
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";
import classes from './MainNavigations.module.css'

function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext)
    return <header className={classes.header}>
        <div className={classes.logo}>
            React MeetUps
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorite'>My Favorites<span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;