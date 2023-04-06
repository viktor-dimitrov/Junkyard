
import {  useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import Error from "../Error/Error";


import LineLarge from "../Lines/LineLarge"
import styles from './Login.module.css'



export default function Login () {

  const { onLoginSubmit, authError, clearAuthError } = useAuthContext();

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
          <div >
            <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com" onFocus={clearAuthError} value={values.email} onChange={changeHandler} required /></p>
            <p><label htmlFor="password">Password</label><input type="password" name="password" id="password" placeholder="*****" onFocus={clearAuthError} value={values.password} onChange={changeHandler} minLength={5} required /></p>
            <p><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="Login" /></p>
          </div>
        </form>
      </div>
      </div>


      {authError && <Error error={authError} /> }


      < LineLarge />

      </>

    )
}