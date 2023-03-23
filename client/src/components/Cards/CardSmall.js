import { Link } from 'react-router-dom';

export default function CardSmall({
       brand,
       model,
       year,
       imageUrl,
       _id
}) {

    return (
        <article className="lastarticle">
            <h1> - {brand} - "{model}" - {year} - </h1>
            <div className="smallpic">
            <img className="smallpic" src={imageUrl} alt="car" />
            </div>
            <p></p>
            < Link to={`/details/${_id}`} className="rm">Read More</Link>
        </article>
    )

}