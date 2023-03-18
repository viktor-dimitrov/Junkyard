
import {useState} from 'react';
import LineLarge from "../Lines/LineLarge";
import styles from './Register.module.css';
import * as userService from '../../services/userService';
// import { getUserData } from '../../services/util';




export default function Register({
    logHandler,
    navigate
}) {

    const[user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        repassword: '',
    })

    const onChangeValue = (e) => {
        setUser( state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmitRegister = async (e) => {
        e.preventDefault();
         await userService.register(user.username, user.email, user.phone, user.password);
         logHandler();


        //  navigate('/catalog');

    

    }



    return (
        <>
            < LineLarge title={'Register'} />
            <div className="center">
                <div className={styles['contactpost']}>

                    {/* <span>&nbsp;</span> */}

                    <form onSubmit={onSubmitRegister} className={styles['register']} method="post" action="#">

                        <p ><label htmlFor="name">Username</label><input type="user" name="username" placeholder="your username" value={user.name} onChange={onChangeValue} /></p>
                        <p><label htmlFor="email">Email</label><input type="email" name="email" id="email" placeholder="your@email.com" value={user.email} onChange={onChangeValue} /></p>
                        <p><label htmlFor="phone">Phone Number</label><input type="phone" name="phone" placeholder="0888123456" value={user.phone} onChange={onChangeValue} /></p>
                        <p><label htmlFor="password">Password</label><input type="password" name="password" placeholder="******" value={user.password} onChange={onChangeValue} /></p>
                        <p><label htmlFor="repassword">Repeat Pasword</label><input type="password" name="repassword" id="repassword" placeholder="******" value={user.repassword} onChange={onChangeValue} /></p>

                        <p><input className="submit" type="submit" name="contact_submitted" value="Register" /></p>

                    </form>
                </div>

            </div>


            < LineLarge />
        </>

    )
    // <span>&nbsp;</span>
}