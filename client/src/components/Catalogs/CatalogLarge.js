
import CardLarge from "../Cards/CardLarge"
import LineLarge from "../Lines/LineLarge"

import styles from './CatalogLarge.module.css'




export default function CatalogLagre({
    cars
}) {

    return (

        <>
     < LineLarge title={`cars`}/>

        <div className={styles['home']} >

            {cars.map(car => < CardLarge key={car._id} {...car} /> )}

        </div>
</>
        
    )
}