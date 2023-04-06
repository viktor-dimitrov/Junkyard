
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";
//  import {  useCarContext } from "../../contexts/CarContext";
import { useEffect, useState } from "react";
import {  getPageData } from "../../services/carService";
import Search from "../Search/Search";
import { useAuthContext } from "../../contexts/AuthContext";


export default function CatalogSmall( ) {

   const { isAuth } = useAuthContext();
 
    // const { cars } = useCarContext();


     const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(0);
      const [data, setData] = useState([]);
      const [queryParams, setQueryParams] = useState({
        brand: '',
        model: '',
        year: '',
        fuel: '',
    })

      useEffect(() => {
        const pageSize = 10;
        const offset = (currentPage - 1) * pageSize; 
            getPageData(pageSize, offset, {...queryParams})
            .then(([result, length]) => {
           
                setData(result);
                setTotalPages(Math.ceil(length / pageSize));
            });
      },[currentPage, queryParams, totalPages]);

      const searchHandler = (values) => {
        setQueryParams(values);
        setCurrentPage(1)
      }



    
    return (

        <>
         < LineLarge title={'Catalog'} />

     {  isAuth &&  < Search searchHandler={searchHandler} /> }

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