import { useContext, useEffect, useState } from 'react';
import { LikeContext } from '../../contexts/LikeContext';
import styles from './Likes.module.css';

import { getMyDealerLike } from '../../services/likeService';

export default function Likes({
    dealerId,
    userId

}) {
    const { dealerLikes, likeDealer, unlikeDealer } = useContext(LikeContext);

    const [myLike, setMyLike] = useState([]);


    useEffect(() => {
        console.log(userId)
        getMyDealerLike(dealerId, userId)
            .then(result => {

                setMyLike(result[0])

            }).catch(error => {
                console.log(error)
            })
    }, [dealerId, userId, dealerLikes])

    console.log(myLike)


    return (

 
        <>
            {!myLike ? <input type="button" name="like" value="Follow" onClick={() => likeDealer(dealerId)} /> : <input type="button" name="like" value="Unfollow" onClick={() => unlikeDealer(myLike?._id)} />}
        </>

    )
}