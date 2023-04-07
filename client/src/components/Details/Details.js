import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { getOneCar } from '../../services/carService';
import { dateCreator } from '../../utils/dateCreator';

import LineLarge from '../Lines/LineLarge';
import DeleteConfirmation from '../DeleteCar/DeleteCar';
import LikeCar from '../Likes/LikeCar';
import DealerCard from './DealerCard';
import Comments from './Comments';

import styles from './Details.module.css'

export default function Details() {

    const { userId, isAuth} = useAuthContext();
    const { carId } = useParams();

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [car, setCar] = useState({});

    useEffect(() => {
       getOneCar(carId)
            .then((carResult) => {
                setCar(carResult);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [carId]);

    const dealer = { ...car.dealer };
    const isOwner = (userId === car._ownerId) ? true : false;

    const handleDeleteClick = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <p>Posted at: {dateCreator(car._createdOn)} </p>

            {car._updatedOn && <p>Last Update: {(dateCreator(car._updatedOn))} </p>}

            < LineLarge title={"Details"} />

            <div className={styles['details']} >

                <article>

                    {showConfirmation && < DeleteConfirmation closeConfirmation={handleCloseConfirmation} carId={carId} />}

                    {isOwner && <div className={styles['ownerbtn']}>
                        < Link to={`edit`} > <button type="button" className={styles['rm']} >Edit  </button> </Link>
                        <button type="button" className={styles['rm']} onClick={handleDeleteClick} >Delete</button>
                    </div>}
                    <>
                        <div className={styles['specifications']}>
                            <ul >
                                <li ><h1 className={styles.left} >Brand</h1> <h1 className={styles.right}> {car.brand} </h1>  </li>
                                <li ><h1 className={styles.left} >Model</h1> <h1 className={styles.right}> {car.model} </h1>  </li>
                                <li ><h1 className={styles.left} >Engine</h1> <h1 className={styles.right}> {car.engine} </h1>  </li>
                                <li ><h1 className={styles.left} >Fuel</h1> <h1 className={styles.right}> {car.fuel} </h1>  </li>
                                <li ><h1 className={styles.left} >Year</h1> <h1 className={styles.right}> {car.year} </h1>  </li>
                                <li ><h1 className={styles.left} >Color</h1> <h1 className={styles.right}> {car.color} </h1>  </li>
                                <li ><h1 className={styles.left} >KM</h1> <h1 className={styles.right}> {car.mileage} </h1>  </li>
                                <li className={styles['like']}  >
                                    {isAuth && < LikeCar carId={carId} isOwner={isOwner} />}
                                </li>
                            </ul>
                        </div>

                        <div className={styles['img']} >
                            <img src={car.imageUrl} alt="car" />
                        </div>
                    </>

                    {isAuth && < DealerCard    {...dealer} isOwner={isOwner} />}

                </article>
            </div>
                    {isAuth && < Comments  carId={carId} userId={userId} />}
        </>
    )
}