import { Link } from 'react-router-dom';
import styles from './Header.css';

console.log(styles)

export default function Header({
    logedUser,
    onLogout
}) {
    return (
        <header className="wrapper" id="header">

            <div id="logo">

                <h1><span id="iisrt"><span id="ii">Junk</span>  <span className="srt"> Yard</span></span></h1>

            </div>


        {logedUser.isLoged ?   <Link to="/catalog" >
                <div id="tagline">
                    <h2>-{logedUser?.userInfo?.email}-</h2>
                    <input type="button" value="logout" onClick={onLogout} />
                </div>
            </Link> : null
            }
       

            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/catalog" >Catalog</Link></li>
                    <li><Link to="/create" >Create</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {/* <li><Link to="/logout">logout</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}