import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import styles from './Header.css';



export default function Header() {

    const { username, isAuth } = useContext(AuthContext);

    console.log(isAuth)


    return (
        <header className="wrapper" id="header">

            <div id="logo">

                <h1><span id="iisrt"><span id="ii">Junk</span>  <span className="srt"> Yard</span></span></h1>

            </div>


        
        {isAuth && <div id="tagline">
                    <h2>{username}</h2>
                    <Link to="/logout" >Logout</Link>
                </div>}
      
           
           
            
       

            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/catalog" >Catalog</Link></li>
                    {isAuth && <li><Link to="/create" >Create</Link></li> }

                    {!isAuth && <li><Link to="/login">Login</Link></li> }
                    {!isAuth && <li><Link to="/register">Register</Link></li> }
                    
                    
                    {/* <li><Link to="/logout">logout</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}