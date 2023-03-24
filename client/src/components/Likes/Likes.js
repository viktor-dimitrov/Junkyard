import { useContext, useEffect, useState } from 'react';
import { LikeContext } from '../../contexts/LikeContext';
import styles from './Likes.module.css';

export default function Likes({
    dealerId,
   
}) {

const { onClickLikeDealer } = useContext( LikeContext )
  
    return (

    <div className={styles['dealer']}>
        <div  className={styles['rating']}>
            <input  type="button"  name="correct" value="Correct" onClick={ () => onClickLikeDealer(dealerId)}  />
        </div>
    </div>
    )
}