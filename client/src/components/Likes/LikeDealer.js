import {  useEffect, useState } from 'react';
import {  useLikeContext } from '../../contexts/LikeContext';

import { getMyDealerLike } from '../../services/likeService';




import styles from './Likes.module.css';



export default function Likes({
    dealerId,
    userId

}) {
    const { followers, likeDealer, unlikeDealer } = useLikeContext();

    const [myLike, setMyLike] = useState([]);


    useEffect(() => {
     
        getMyDealerLike(dealerId, userId)
            .then(result => {

                setMyLike(result[0])

            }).catch(error => {
                console.log(error)
            })
    }, [dealerId, userId, followers])

   

    return (

 
        <>
            {!myLike ? <input type="button" name="like" value="Follow" className={styles['rm']}  onClick={() => likeDealer(dealerId)} /> : <input type="button" name="like" value="Unfollow" className={styles['rm']}  onClick={() => unlikeDealer(myLike?._id)} />}
        </>

    )
}