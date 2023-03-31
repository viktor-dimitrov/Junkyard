import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Header.css';



export default function Header() {

    const { userName, isAuth, userId, imageUrl } = useAuthContext();

    return (
        <header className="wrapper" id="header">

            <div id="logo">
                <h1><span id="iisrt"><span id="ii">Junk</span>  <span className="srt"> Yard</span></span></h1>
            </div>

            {isAuth && <div className="tagline">
                <div className="img">
                    <h2>
                        {userName}
                        <p> <Link to="/logout" >Logout</Link> </p>
                    </h2>
                    <img src={imageUrl} alt="user" />
                </div>
            </div>}

            <nav>
                <ul>
                    {isAuth && <>
                        <li><Link to={`/profile/${userId}`} >My Profile</Link></li>
                        <li><Link to={`/favorite/${userId}`} >Favorite List</Link></li>
                        <li><Link to="/create" >Create</Link></li>
                    </>}
                    <li><Link to="/catalog" >Catalog</Link></li>
                    <li><Link to="/" >Home</Link></li>
                    {!isAuth && <li><Link to="/login">Login</Link></li>}
                    {!isAuth && <li><Link to="/register">Register</Link></li>}


                </ul>
            </nav>
        </header>
    )
}