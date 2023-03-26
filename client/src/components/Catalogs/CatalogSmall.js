import { useState, useEffect, useContext } from "react";
import * as carService from '../../services/carService';
import Search from "../Search/Search";
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";
import { CarContext } from "../../contexts/CarContext";



export default function CatalogSmall( ) {

    const { cars } = useContext(CarContext);

    
    return (

        <>
         {/* < Search /> */}

         < LineLarge title={'Catalog'} />

        <div id="latestp">

            {cars.map(car => < CardSmall key={car._id} {...car} /> )}


       </div>

    </>

    )
}