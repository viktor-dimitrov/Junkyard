

import { useForm } from '../../hooks/useForm';
import LineLarge from "../Lines/LineLarge";
import styles from './Register.module.css';
import { useAuthContext } from '../../contexts/AuthContext';





export default function Register() {

    const { onRegisterSubmit } = useAuthContext();

    const {values, changeHandler, onSubmit} = useForm({
        username: '',
        email: '',
        phone: '',
        imageUrl: '',
        password: '',
        repassword: '',
    }, onRegisterSubmit);


    return (
        <>
            < LineLarge title={'Register'} />
            <div className="center">
                <div className={styles['contactpost']}>

                

                    <form onSubmit={onSubmit} method="POST" className={styles['register']}  >

                        <p ><label htmlFor="name">Username</label><input type="user" name="username" placeholder="your username" value={values.name} onChange={changeHandler} /></p>
                        <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com" value={values.email} onChange={changeHandler} /></p>
                        <p><label htmlFor="phone">Phone Number</label><input type="phone" name="phone" placeholder="0888123456" value={values.phone} onChange={changeHandler} /></p>
                        <p><label htmlFor="imageUrld">ImageUrl</label><input type="text" name="imageUrl" placeholder="http://pictures.com/myPicture.jpeg" value={values.imageUrl} onChange={changeHandler} /></p>
                        <p><label htmlFor="password">Password</label><input type="password" name="password" placeholder="******" value={values.password} onChange={changeHandler} /></p>
                        <p><label htmlFor="repassword">Repeat Pasword</label><input type="password" name="repassword" id="repassword" placeholder="******" value={values.repassword} onChange={changeHandler} /></p>

                        <p><input className="submit" type="submit" name="contact_submitted" value="Register" /></p>

                    </form>
                </div>

            </div>


            < LineLarge />
        </>

    )
    // <span>&nbsp;</span>
}