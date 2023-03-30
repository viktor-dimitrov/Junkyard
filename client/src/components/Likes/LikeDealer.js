import { useEffect, useState } from 'react';
import { useLikeContext } from '../../contexts/LikeContext';
import { getMyDealerLike } from '../../services/likeService';

import styles from './Likes.module.css';

export default function Likes({
    dealerId,
    userId,
    isOwner

}) {
    const { getFollowers, followers, likeDealer, unlikeDealer } = useLikeContext();

    const [myLike, setMyLike] = useState([]);

    useEffect(() => {
        getFollowers(dealerId);
    }, [])

    useEffect(() => {
        getMyDealerLike(dealerId, userId)
            .then(result => {
                setMyLike(result[0]);
            }).catch(error => {
                console.log(error);
            })
    }, [dealerId, userId, followers]);


    return (

        <>
            <h3> {followers.length} &nbsp;&nbsp;&nbsp; Followers</h3>
            {!isOwner && <>
                {!myLike
                    ? <input type="button" name="like" value="Follow" className={styles['rm']} onClick={() => likeDealer(dealerId)} />
                    : <input type="button" name="like" value="Unfollow" className={styles['rm']} onClick={() => unlikeDealer(myLike?._id)} />
                }
            </>}
        </>

    );
}