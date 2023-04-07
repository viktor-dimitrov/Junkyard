
import LineLarge from "../Lines/LineLarge"
import styles from './Home.module.css';


export default function PageNotFound() {




    return (


        <div className={styles['nf']}>

            < LineLarge title={'404'} />
            < LineLarge title={'Page Not Found'} />

            <div className={styles['msg']} >
                <h4>The page you are looking for may have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any spelling mistakes, or try navigating back to the homepage.</h4>
            </div>


            
        </div>


    )
}