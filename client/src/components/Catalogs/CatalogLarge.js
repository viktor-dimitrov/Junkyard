
import {  useCarContext } from "../../contexts/CarContext"
import CardLarge from "../Cards/CardLarge"

import styles from './CatalogLarge.module.css'




export default function CatalogLagre() {

    const { cars } = useCarContext();




    return (

        <>


        <div className={styles['home']} >

            {cars.map(car => < CardLarge key={car._id} {...car} /> )}

        </div>




</>
        
    )
}