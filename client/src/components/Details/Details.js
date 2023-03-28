import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as carService from '../../services/carService';
import LineLarge from '../Lines/LineLarge';
import DeleteConfirmation from '../DeleteCar/DeleteCar';



import styles from './Details.module.css'
import LikeDealer from '../Likes/LikeDealer';
import LikeCar from '../Likes/LikeCar';

import { LikeContext } from '../../contexts/LikeContext';



export default function Details({
 
}) {

    const { userId, isAuth } = useContext(AuthContext);
    const { dealerLikes, getDealerLikes, carLikes, getCarLikes } = useContext(LikeContext);
    const { carId } = useParams();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const [car, setCar] = useState({});
    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
                getDealerLikes(result?.dealer?._id);
                getCarLikes(result?._id);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [carId]);

    const dealer = { ...car.dealer }
    const isOwner = (userId === car._ownerId) ? true : false


    const timestampCreate = car._createdOn;
    const timestampUpdate = car._updatedOn;
    const dateCreate = new Date(timestampCreate);
    const dateUpdate = new Date(timestampUpdate);
    const formattedDateCreate = dateCreate.toLocaleString();
    const formattedDateUpdate = dateUpdate.toLocaleString();

    const handleDeleteClick = () => {
        setShowConfirmation(true);
      };
    
      const handleCloseConfirmation = () => {
        setShowConfirmation(false);
      };


   

    return (
        <>
            <p>Posted at: {formattedDateCreate} </p>
            {car._updatedOn && <p>Last Update: {formattedDateUpdate} </p> }

            < LineLarge title={"Details"} />


            <div className={styles['details']} >
           

            
                <article>

                {showConfirmation && < DeleteConfirmation closeConfirmation={handleCloseConfirmation} carId={carId}  /> }



                {isOwner && <div className={styles['ownerbtn']}>
                          < Link to={`edit`} > <button type="button" className={styles['rm']} >Edit  </button> </Link>
                            <button type="button" className={styles['rm']} onClick={handleDeleteClick} >Delete</button>
                        </div>}
    
                    <div className={styles['specifications']}>

                
                       

                        <ul >
                            <li ><h1 className={styles.left} >Brand</h1> <h1 className={styles.right}> {car.brand} </h1>  </li>
                            <li ><h1 className={styles.left} >Model</h1> <h1 className={styles.right}> {car.model} </h1>  </li>
                            <li ><h1 className={styles.left} >Engine</h1> <h1 className={styles.right}> {car.engine} </h1>  </li>
                            <li ><h1 className={styles.left} >Fuel</h1> <h1 className={styles.right}> {car.fuel} </h1>  </li>
                            <li ><h1 className={styles.left} >Year</h1> <h1 className={styles.right}> {car.year} </h1>  </li>
                            <li ><h1 className={styles.left} >Color</h1> <h1 className={styles.right}> {car.color} </h1>  </li>
                            <li ><h1 className={styles.left} >KM</h1> <h1 className={styles.right}> { car.mileage } </h1>  </li>
                            <li> 
                                <h1 className={styles.center} > <strong> {carLikes.length} </strong> &nbsp;&nbsp;&nbsp; interested</h1> 
                             { !isOwner && <h1 className={styles.right} > < LikeCar carId={carId} userId={userId}  /> </h1> }
                            </li>
                        </ul>

                    </div>
                    

                    <div className={styles['img']} >
                        <img src={car.imageUrl} alt="car" />
                    </div>

                    
                    {isAuth && <div className={styles['dealer']}>

                        <div>
                            <h3>Dealer</h3>
                            <h2> {dealer.username}</h2>
                        </div>

                        <div>
                            <h3>Email</h3>
                            <h2>{dealer.email} </h2>
                        </div>

                        <div>
                            <h3>Phone</h3>
                            <h2>{dealer.phone} </h2>
                        </div>

                        <div>
                            <h3>5 &nbsp;&nbsp;&nbsp; Cars </h3>
                            <h3> {dealerLikes.length} &nbsp;&nbsp;&nbsp; Followers</h3>
                        </div>



                        {!isOwner && < LikeDealer dealerId={dealer._id} userId={userId} />}

                    </div>
                    }

                </article>

            </div>


            <div className={styles['details']} >

                <div className="sidebar ">
                    <aside>
                        <h1>Recent Posts</h1>
                        <ul>
                            <li><a href="#">Suspendisse Enim Elit Tempor Acer</a></li>
                            <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
                            <li><a href="#">Suspendisse Enim Elit Tempor Acer Fermentum Vulputate</a></li>
                            <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
                        </ul>
                    </aside>
                    <aside>
                        <div id="cat">
                            <h1>Categories</h1>
                            <ul>
                                <li><a href="#">Webdesign</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Tutorials</a></li>
                                <li><a href="#">Freebies</a></li>
                                <li><a href="#">Wordpress</a></li>
                                <li><a href="#">HTML/CSS</a></li>
                            </ul>
                        </div>
                        <div id="archives">
                            <h1>Archives</h1>
                            <ul>
                                <li><a href="#">November 2012</a></li>
                                <li><a href="#">December 2012</a></li>
                                <li><a href="#">January 2013</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>

                <div className="sidebar right">
                    <aside>
                        <h1>Recent Posts</h1>
                        <ul>
                            <li>Suspendisse Enim Elit Tempor Acer</li>
                            <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
                            <li><a href="#">Suspendisse Enim Elit Tempor Acer Fermentum Vulputate</a></li>
                            <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
                        </ul>
                    </aside>
                    <aside>
                        <div id="cat">
                            <h1>Categories</h1>
                            <ul>
                                <li><a href="#">Webdesign</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Tutorials</a></li>
                                <li><a href="#">Freebies</a></li>
                                <li><a href="#">Wordpress</a></li>
                                <li><a href="#">HTML/CSS</a></li>
                            </ul>
                        </div>
                        <div id="archives">
                            <h1>Archives</h1>
                            <ul>
                                <li><a href="#">November 2012</a></li>
                                <li><a href="#">December 2012</a></li>
                                <li><a href="#">January 2013</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>


            </div>



        </>
    )
}