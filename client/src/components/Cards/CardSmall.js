import { Link } from 'react-router-dom';

export default function CardSmall({
       body,
       _id
}) {

    return (
        <article className="lastarticle">
            <h1> - {body.brand} - "{body.model}" - {body.year} - </h1>
            <div className="smallpic">
            <img className="smallpic" src={body.imageUrl} alt="car" />
            </div>
            <p></p>
            < Link to={`/details/${_id}`} className="rm">Read More</Link>
        </article>
    )

}