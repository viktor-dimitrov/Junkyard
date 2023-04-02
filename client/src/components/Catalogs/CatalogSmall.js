
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";
import {  useCarContext } from "../../contexts/CarContext";



export default function CatalogSmall( ) {

    const { cars } = useCarContext();

    console.log(cars)

    
    return (

        <>
         {/* < Search /> */}

         < LineLarge title={'Catalog'} />

        <div className="latestp">

            {cars.map(car => < CardSmall key={car._id} {...car} /> )}


       </div>

    </>

    )
}