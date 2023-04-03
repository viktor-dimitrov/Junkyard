
import { useEffect, useState } from 'react';
import LikeDealer from '../Likes/LikeDealer';

import styles from './Details.module.css'
import { getMyCars } from '../../services/carService';


export default function DealerCard({ _id, username, imageUrl, email, phone , isOwner}) {

const [dealerCars, setDealerCars] = useState([]);

useEffect( () => {
    getMyCars(_id)
    .then( result => { setDealerCars(result)})
}, [_id])



    return (
        <div className={styles['dealer']}>
            <div>
                <h3>Dealer </h3>
                <h2> {username}</h2>
            </div>

            <div>
                <h3>Email</h3>
                <h2>{email} </h2>
            </div>

            <div>
                <h3>Phone</h3>
                <h2>{phone} </h2>
            </div>

            <div>
                <h3>{dealerCars.length} &nbsp;&nbsp;&nbsp; Cars </h3>
            </div>

            <div className={styles['flex']}>
                <div>
                    < LikeDealer dealerId={_id}  isOwner={isOwner} />
                </div>
                <img src={imageUrl} alt="dealer" />
            </div>
        </div>
    )

}