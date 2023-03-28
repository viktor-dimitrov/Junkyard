import { useContext, useEffect, useState } from 'react';
import { LikeContext } from '../../contexts/LikeContext';
import styles from './Likes.module.css';

import { getMyCarLike } from '../../services/likeService';

export default function Likes({
    carId,
    userId

}) {
    const { carLikes, likeCar, unlikeCar } = useContext(LikeContext);

    const [myLike, setMyLike] = useState([]);


    useEffect(() => {
    
        getMyCarLike(carId, userId)
            .then(result => {

                setMyLike(result[0])

            }).catch(error => {
                console.log(error)
            })
    }, [carId, userId, carLikes])

  

    return (


        <>
            {!myLike ? <input type="button" name="like" value="Favorite" onClick={() => likeCar(carId)} /> : <input type="button" name="like" value="Unfavorite" onClick={() => unlikeCar(myLike?._id)} />}
        </>

    )
}