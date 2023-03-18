import LineLarge from "../Lines/LineLarge"

import styles from './Login.module.css'







export default function Login () {
    return (
<>
 < LineLarge title={"Login"} />



<div className="center" >
        <div className={styles['contactpost']}>
    
        <form className={styles['login']} method="post" action="#">
          <div id="contactform">
          
            <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com"  /></p>
         
            <p><label htmlFor="email">Password</label><input type="email" name="password" id="name" placeholder="your@email.com"  /></p>
         
            <p><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="Login" /></p>
          </div>
        </form>
      </div>

      </div>

      < LineLarge />

      </>

    )
}