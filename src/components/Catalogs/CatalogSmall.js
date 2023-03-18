import { useState, useEffect } from "react";
import * as carService from '../../services/carService';
import Search from "../Search/Search";
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";

export default function CatalogSmall({ cars }) {


console.log(cars)

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