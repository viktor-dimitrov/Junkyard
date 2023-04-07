import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLikeContext } from '../../contexts/LikeContext';
import { getMyDealerLike } from '../../services/likeService';

import styles from './Likes.module.css';

export default function Likes({
    dealerId,
    isOwner

}) {
    const { userId } = useAuthContext();
    const { getFollowers, followers, likeDealer, unlikeDealer } = useLikeContext();

    const [myLike, setMyLike] = useState([]);
    const [dealerFollowers, setDealerFollowers] = useState([]);

    useEffect(() => {
        getFollowers(dealerId)
            .then(result => { setDealerFollowers(result) })
    }, [dealerId, getFollowers])

    useEffect(() => {
        getMyDealerLike(dealerId, userId)
            .then(result => {
                setMyLike(result[0]);
            }).catch(error => {
                console.log(error);
            })
    }, [dealerId, userId, followers]);

    const onLikeClick = async () => {
        const result = await likeDealer(dealerId);
        setDealerFollowers(state => ([...state, result]));
    }

    const onUnlikeClick = async (likeId) => {
        await unlikeDealer(likeId);
        setDealerFollowers(state => state.filter(x => x._id !== likeId))
    }

    return (

        <>
            <h3> {dealerFollowers.length} &nbsp;&nbsp;&nbsp; Followers</h3>
            {!isOwner && <>
                {!myLike
                    ? <input type="button" name="like" value="Follow" className={styles['rm']} onClick={() => onLikeClick()} />
                    : <input type="button" name="like" value="Unfollow" className={styles['rm']} onClick={() => onUnlikeClick(myLike?._id)} />
                }
            </>}
        </>

    );
}