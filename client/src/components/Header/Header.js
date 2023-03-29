import { Link } from 'react-router-dom';
import {  useAuthContext } from '../../contexts/AuthContext';

import styles from './Header.css';



export default function Header() {

    const { userName, isAuth, userId } = useAuthContext();

  


    return (
        <header className="wrapper" id="header">

            <div id="logo">

                <h1><span id="iisrt"><span id="ii">Junk</span>  <span className="srt"> Yard</span></span></h1>

            </div>


        
        {isAuth && <div id="tagline">
                    <h2>{userName}</h2>
                    <Link to="/logout" >Logout</Link>
                </div>}
      
           
           
            
       

            <nav>
                <ul>

                {isAuth  && <li><Link to={`/profile/${userId}`} >My Profile</Link></li> }


                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/catalog" >Catalog</Link></li>
                    {isAuth && <li><Link to="/create" >Create</Link></li> }

                    {!isAuth && <li><Link to="/login">Login</Link></li> }
                    {!isAuth && <li><Link to="/register">Register</Link></li> }
                    
                
                </ul>
            </nav>
        </header>
    )
}