import { Link } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import { useCarContext } from "../../contexts/CarContext";

import LineLarge from "../Lines/LineLarge"
import CatalogLarge from '../Catalogs/CatalogLarge';

import styles from './Profile.module.css'


export default function Profile () {

    const {userId, userName, phone,  imageUrl, email} = useAuthContext();
    const {cars} = useCarContext();

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
            < Link to={`#`} > <button type="button" >Followers  </button> </Link>
            < Link to={`#`} > <button type="button"  >Followings  </button> </Link>

            </div>
        </div>

        < LineLarge title={`cars`}/>

        < CatalogLarge cars={userCars}/>
      
        
        </>
    )
}