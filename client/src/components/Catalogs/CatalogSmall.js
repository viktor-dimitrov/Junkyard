
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";
 import {  useCarContext } from "../../contexts/CarContext";
import { useEffect, useState } from "react";
import {  getPageData } from "../../services/carService";


export default function CatalogSmall( ) {

    const { cars } = useCarContext();


     const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(0);
      const [data, setData] = useState([]);

      useEffect(() => {
        const pageSize = 10;
        const offset = (currentPage - 1) * pageSize; 
            getPageData(pageSize, offset)
            .then(result => {
           
                setData(result);
                setTotalPages(Math.ceil(cars.length / pageSize));
            });
      },[currentPage, cars.length])
    
    return (

        <>
         < LineLarge title={'Catalog'} />

        <div className="latestp">
            {data.map(car => < CardSmall key={car._id} {...car} /> )}
       </div>

       <div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>

    </>

    )
}