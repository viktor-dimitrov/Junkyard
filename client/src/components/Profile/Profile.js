import { Link, Routes, Route } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCarContext } from "../../contexts/CarContext";


import LineLarge from "../Lines/LineLarge"
import CatalogLarge from '../Catalogs/CatalogLarge';

import styles from './Profile.module.css'
import { useLikeContext } from "../../contexts/LikeContext";
import { useEffect, useState } from "react";
import UsersList from "./UsersList";


export default function Profile() {

    const { userId, userName, phone, imageUrl, email } = useAuthContext();
    const { cars } = useCarContext();
    const { followers, followings, getFollowings, getFollowers } = useLikeContext();

    // const [follows , setFollows] = useState([]);

    useEffect(() => {
        getFollowers(userId)
        getFollowings(userId)


            .catch(error => {
                console.log(error.message)
            })

    }, [userId]);



    const userCars = cars.filter(car => car._ownerId === userId);

    return (
        <>

            < LineLarge title={'Profile'} />

            <div className={styles['profile']} >

                <img src={imageUrl} alt="userImg" />

                <div>
                    <h2>Username</h2>
                    <h1>{userName}</h1>
                    <h2>Email</h2>
                    <h1>{email}</h1>
                    <h2>Phone Number</h2>
                    <h1>{phone}</h1>

                </div>


                <div>

                

                    < Link to={`followers`} > <h3>  <strong>{followers?.length}</strong> &nbsp;&nbsp;&nbsp; Followers </h3> </Link>
                    < Link to={`followings`} >  <h3>   <strong>{followings?.length}</strong> &nbsp;&nbsp;&nbsp; Following </h3> </Link>
                    < Link to='' >  <h3> <strong>{userCars?.length}</strong> &nbsp;&nbsp;&nbsp; Cars  </h3> </Link> 

                   

                </div>



            </div>



            < Routes>

                < Route path="/followers" element={< UsersList title={'Followers'}  users={followers.map(x => x = x.follower)} /> } />
                < Route path="/followings" element={ < UsersList title={' Following'} users={followings.map(x => x = x.following)} /> } />
                < Route path="" element={< CatalogLarge cars={userCars} />} />

            </Routes>





        </>
    )
}