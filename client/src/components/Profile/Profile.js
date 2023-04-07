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
                < Route path="/followers" element={userData.myFollowers?.length
                    ? < UsersList title={'Followers'} users={userData['myFollowers']} />
                    : <div className={styles['empty']} >
                        <p>You currently have no followers. Start sharing your content and engaging with other users to grow your following.</p>
                    </div>} />

                < Route path="/followings" element={userData.myFollowings?.length
                    ? < UsersList title={' Following'} users={userData['myFollowings']} />
                    : <div className={styles['empty']} >
                        <p>You are not currently following any users. Start exploring and following other users to see their vCards in your feed.</p>
                    </div>} />

                < Route path="" element={userData.userCars?.length
                    ? < CatalogLarge cars={userData['userCars']} />
                    : <div className={styles['empty']} >
                        <p>You have not posted any cars yet. Start sharing your cars by clicking on the <strong>'Create'</strong> button and fill out the fields to create a post.</p>
                    </div>} />
            </Routes>

        </>
    )
}