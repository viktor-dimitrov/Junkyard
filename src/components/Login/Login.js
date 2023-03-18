import { useState } from "react"
import LineLarge from "../Lines/LineLarge"
import {login} from '../../services/userService.js'
import styles from './Login.module.css'







export default function Login ({
  logHandler
}) {

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const onChangeValue = (e) => {
    setUser( state => ({...state, [e.target.name]: e.target.value}))
}

const onSubmitLogin = async (e) => {
  e.preventDefault();
  await login(user.email, user.password);
  logHandler();
 
}


    return (
<>
 < LineLarge title={"Login"} />



<div className="center" >
        <div className={styles['contactpost']}>
    
        <form onSubmit={onSubmitLogin} className={styles['login']} method="post" action="#">
          <div id="contactform">
          
            <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com" value={user.email} onChange={onChangeValue} /></p>
         
            <p><label htmlFor="email">Password</label><input type="password" name="password" id="password" placeholder="*****" value={user.password} onChange={onChangeValue} /></p>
         
            <p><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="Login" /></p>
          </div>
        </form>
      </div>

      </div>

      < LineLarge />

      </>

    )
}