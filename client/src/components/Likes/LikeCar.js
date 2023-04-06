import { useEffect, useState } from 'react';
import { useLikeContext } from '../../contexts/LikeContext';
import { getMyCarLike } from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Likes.module.css';


export default function Likes({ carId, isOwner }) {
    
    const {userId} = useAuthContext();

    const { getCarLikes, likes, likeCar, unlikeCar } = useLikeContext();
    const [carLikes, setCarLikes] = useState([]);
    const [myLike, setMyLike] = useState([]);

    useEffect(() => {
        getCarLikes(carId)
        .then( result => { setCarLikes(result)})
    }, [carId, getCarLikes]);


    useEffect(() => {
        getMyCarLike(carId, userId)
            .then(result => {
                setMyLike(result[0]);
            }).catch(error => {
                console.log(error);
            })
    }, [carId, userId, likes]);

    
    const onLikeClick = async () => {
        const result = await likeCar(carId);
        setCarLikes(state => ([...state, result]));
    }

    const onUnlikeClick = async (likeId) => {
        await unlikeCar(likeId);
        setCarLikes(state => state.filter(x => x._id !== likeId))
    }


    return (
        <>
            <h1>  <strong> {carLikes?.length} </strong> &nbsp;&nbsp;&nbsp; interested</h1>
            <h1>
                {!isOwner && <>
                    {!myLike
                        ? <input type="button" name="like" value="Favorite" className={styles['rm']} onClick={() => onLikeClick(carId)} />
                        : <input type="button" name="like" value="Unfavorite" className={styles['rm']} onClick={() => onUnlikeClick(myLike?._id)} />
                    }
                </>}
            </h1>
        </>
    );
}