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

    const [myFollowers, setMyFollowers] = useState([]);
    const [myFollowings, setMyFollowings] = useState([]);
    const [userCars, setCars] = useState([]);

    useEffect(() => {
        getMyCars(userId)
        .then(result => { setCars(result)})
        getFollowers(userId)
        .then(result => {setMyFollowers(result)})
        getFollowings(userId)
        .then(result => {setMyFollowings(result)})
            .catch(error => {
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

                    < Link to={`followers`} > <h3> <strong>{myFollowers.length}</strong> &nbsp;&nbsp;&nbsp;  Followers </h3> </Link>
                    < Link to={`followings`} >  <h3> <strong>{myFollowings.length}</strong> &nbsp;&nbsp;&nbsp;   Following </h3> </Link>
                    < Link to='' >  <h3> <strong>{userCars?.length}</strong> &nbsp;&nbsp;&nbsp; Cars  </h3> </Link> 

                </div>

            </div>


            < Routes>

                < Route path="/followers" element={< UsersList title={'Followers'}  users={myFollowers} /> } />
                < Route path="/followings" element={ < UsersList title={' Following'} users={myFollowings}  /> } />
                < Route path="" element={< CatalogLarge cars={userCars} />} />

            </Routes>


        </>
    )
}