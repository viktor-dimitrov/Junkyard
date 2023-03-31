import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLikeContext } from "../../contexts/LikeContext";
import { getMyCars } from "../../services/carService";

import LineLarge from "../Lines/LineLarge"
import CatalogLarge from '../Catalogs/CatalogLarge';
import UsersList from "./UsersList";

import styles from './Profile.module.css'


export default function Profile() {

    const { userId, userName, phone, imageUrl, email } = useAuthContext();
    const { getFollowings, getFollowers } = useLikeContext();

    const [userData, setUserData] = useState({
        userCars: [],
        myFollowers: [],
        myFollowings: [],
    })

    useEffect(() => {
        Promise.all([getMyCars(userId), getFollowers(userId), getFollowings(userId)])
            .then(([cars, followers, followings]) => {
                setUserData({
                    userCars: cars,
                    myFollowers: followers,
                    myFollowings: followings
                });
            }).catch(error => {
                console.log(error.message)
            })
    }, [userId, getFollowers, getFollowings]);


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

                    < Link to={`followers`} > <h3> <strong>{userData['myFollowers'].length}</strong> &nbsp;&nbsp;&nbsp;  Followers </h3> </Link>
                    < Link to={`followings`} >  <h3> <strong>{userData['myFollowings'].length}</strong> &nbsp;&nbsp;&nbsp;   Following </h3> </Link>
                    < Link to='' >  <h3> <strong>{userData['userCars'].length}</strong> &nbsp;&nbsp;&nbsp; Cars  </h3> </Link>

                </div>

            </div>


            < Routes>

                < Route path="/followers" element={< UsersList title={'Followers'} users={userData['myFollowers']} />} />
                < Route path="/followings" element={< UsersList title={' Following'} users={userData['myFollowings']} />} />
                < Route path="" element={< CatalogLarge cars={userData['userCars']} />} />

            </Routes>


        </>
    )
}