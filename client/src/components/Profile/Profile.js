import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCarContext } from "../../contexts/CarContext";


import LineLarge from "../Lines/LineLarge"
import CatalogLarge from '../Catalogs/CatalogLarge';

import styles from './Profile.module.css'
import { useLikeContext } from "../../contexts/LikeContext";
import { useEffect, useState } from "react";


export default function Profile () {

    const {userId, userName, phone,  imageUrl, email} = useAuthContext();
    const {cars} = useCarContext();
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
        
        < LineLarge title={'Profile'}/>

        <div className={styles['profile']} >
            <img src={imageUrl} alt="userImg" />

            <div>
            <h1>{userName}</h1>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            
            </div>

            <div>
            < Link to={`#`} > <button type="button" > <strong>{followers?.length}</strong> &nbsp;&nbsp;&nbsp; Followers  </button> </Link>
            < Link to={`#`} > <button type="button"  > <strong>{followings?.length}</strong> &nbsp;&nbsp;&nbsp; Following  </button> </Link>

            </div>
        </div>

        < LineLarge title={`cars`}/>

        < CatalogLarge cars={userCars}/>
      
        
        </>
    )
}