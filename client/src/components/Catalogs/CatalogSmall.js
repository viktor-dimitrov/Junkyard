

import { useEffect, useState } from "react";
import { getPageData } from "../../services/carService";
import { useAuthContext } from "../../contexts/AuthContext";
import LineLarge from "../Lines/LineLarge";
import CardSmall from "../Cards/CardSmall";
import Search from "../Search/Search";
import styles from './CatalogSmall.module.css';

export default function CatalogSmall() {

  const { isAuth } = useAuthContext();

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
    getPageData(pageSize, offset, { ...queryParams })
      .then(([result, length]) => {

        setData(result);
        setTotalPages(Math.ceil(length / pageSize));
      });
  }, [currentPage, queryParams, totalPages]);

  const searchHandler = (values) => {
    setQueryParams(values);
    setCurrentPage(1)
  }

  return (
    <>
      < LineLarge title={'Catalog'} />

      {isAuth && < Search searchHandler={searchHandler} />}

      <div className={styles['catalog-small']}>
        {data.map(car => < CardSmall key={car._id} {...car} />)}
      </div>

      {totalPages > 0 
      ? <div className={styles['pagination']} >
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page <strong> {currentPage} </strong> of <strong>{totalPages} </strong></span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
       : <div className={styles['empty']} >
       <p>We're sorry, but we couldn't find any results for your search.</p>
   </div> }
    </>

  )
}