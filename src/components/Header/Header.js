import { Link } from 'react-router-dom';
import './Header.css';



export default function Header ({
    logedUser
}) {
    return (
        <header className="wrapper" id="header">
          
        <div id="logo">
       
        <h1><span id="iisrt"><span id="ii">Junk</span>  <span id="srt"> Yard</span></span></h1>
        <div id="tagline">
            <h2>{logedUser?.userInfo?.username}</h2>
        </div>
        </div> 
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/catalog" >Catalog</Link></li>
                <li><Link to="/create" >Create</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    </header>
    )
}