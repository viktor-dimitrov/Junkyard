import { Link } from 'react-router-dom'
import styles from './CardLarge.module.css'

export default function CardLarge({
    imageUrl,
    brand,
    model,
    year,
    engine,
    mileage,
    color,
    fuel,
    _id

}) {
    return (
        <article className={styles['card-large']} >
            <div>
                <img className="largepic" src={imageUrl} alt="car" />
            </div>

            <aside className="right">
                <ul>
                    <li> <h3>{brand}  &nbsp;&nbsp;&nbsp;   {model}</h3>  </li>
                    <li> <h3>{engine} &nbsp;&nbsp;&nbsp; {fuel} </h3></li>
                    <li> <h3>{year}</h3></li>
                    <li> <h3>{color}</h3></li>
                    <li> <h3>{mileage} km</h3></li>
                </ul>
                <Link to={`/details/${_id}`} className="rm">Read More</Link>
            </aside>
        </article>
    )
}