import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavoriteCars } from "../../services/likeService";
import CatalogLagre from "../Catalogs/CatalogLarge";
import LineLarge from "../Lines/LineLarge";
import styles from "./FavoriteList.module.css";

export default function FavoriteList() {

    const { userId } = useParams();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getFavoriteCars(userId)
            .then(result => { setCars(result) })
            .catch(error => {
                console.log(error.message);
            })

    }, [userId])

    return (

        <>
            < LineLarge title={'Favorite'} />
            < CatalogLagre cars={cars} />
            {!cars.length && <div className={styles['empty']} >
                <p>Your favorite list is currently empty. Start adding cars to your favorites by clicking on the  <strong>'Favorite'</strong> button on any car you like.</p>
            </div>}
        </>
    )
}