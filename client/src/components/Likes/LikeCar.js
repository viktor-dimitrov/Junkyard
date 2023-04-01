import { useEffect, useState } from 'react';
import { useLikeContext } from '../../contexts/LikeContext';
import { getMyCarLike } from '../../services/likeService';

import styles from './Likes.module.css';


export default function Likes({ carId, userId, isOwner }) {

    const { getCarLikes, carLikes, likeCar, unlikeCar } = useLikeContext();
    const [myLike, setMyLike] = useState([]);

    useEffect(() => {
        getCarLikes(carId)
    }, [carId, getCarLikes]);


    useEffect(() => {
        getMyCarLike(carId, userId)
            .then(result => {
                setMyLike(result[0]);
            }).catch(error => {
                console.log(error);
            })
    }, [carId, userId, carLikes]);


   

    return (
        <>
            <h1>  <strong> {carLikes.length} </strong> &nbsp;&nbsp;&nbsp; interested</h1>
            <h1>
                {!isOwner && <>
                    {!myLike
                        ? <input type="button" name="like" value="Favorite" className={styles['rm']} onClick={() => likeCar(carId)} />
                        : <input type="button" name="like" value="Unfavorite" className={styles['rm']} onClick={() => unlikeCar(myLike?._id)} />
                    }
                </>}
            </h1>
        </>
    );
}