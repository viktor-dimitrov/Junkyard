
import {  useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";


import LineLarge from "../Lines/LineLarge"
import styles from './Login.module.css'



export default function Login () {

  const { onLoginSubmit } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit)

    return (
<>
 < LineLarge title={"Login"} />



<div className="center" >
        <div className={styles['contactpost']}>
    
        <form onSubmit={onSubmit} method="POST" className={styles['login']}>
          <div id="contactform">
          
            <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com" value={values.email} onChange={changeHandler} /></p>
         
            <p><label htmlFor="email">Password</label><input type="password" name="password" id="password" placeholder="*****" value={values.password} onChange={changeHandler} /></p>
         
            <p><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" defaultValue="Login" /></p>
          </div>
        </form>
      </div>

      </div>

      < LineLarge />

      </>

    )
}