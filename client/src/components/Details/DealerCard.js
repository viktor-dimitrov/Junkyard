
import LikeDealer from '../Likes/LikeDealer';

import styles from './Details.module.css'

export default function DealerCard({userId , _id, username, imageUrl, email, phone , isOwner}) {



    return (
        <div className={styles['dealer']}>
            <div>
                <h3>Dealer </h3>
                <h2> {username}</h2>
            </div>

            <div>
                <h3>Email</h3>
                <h2>{email} </h2>
            </div>

            <div>
                <h3>Phone</h3>
                <h2>{phone} </h2>
            </div>

            <div>
                <h3>5 &nbsp;&nbsp;&nbsp; Cars </h3>
            </div>

            {/* < Link to={`/profile/${userId}`} > <input type="button" value="My Profile" className={styles['rm']} /></Link>  */}
            <div className={styles['flex']}>
                <div>
                    < LikeDealer dealerId={_id} userId={userId} isOwner={isOwner} />
                </div>
                <img src={imageUrl} alt="dealer" />
            </div>
        </div>
    )

}