import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFavoriteCars } from "../../services/likeService";
import CatalogLagre from "../Catalogs/CatalogLarge"
import LineLarge from "../Lines/LineLarge"


export default function FavoriteList () {

    const {userId} = useParams();
    const [cars, setCars] = useState([]);

    useEffect( () => {
        getFavoriteCars(userId)
        .then( result => {setCars(result)})
        .catch(error => {
            console.log(error.message)
        })

    },[userId])

    return(
        
        <>
        < LineLarge title={'Favorite'} />
        < CatalogLagre cars={cars}/>        
        </>
    )
}