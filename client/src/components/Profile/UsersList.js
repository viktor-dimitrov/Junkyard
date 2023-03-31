import DealerCard from "../Details/DealerCard";
import LineLarge from "../Lines/LineLarge";

import styles from './Profile.module.css';

export default function UsersList({
    title,
    users
}) {

    const dealers = users.map(user => user = user.userInfo);

    return (
        <>
            < LineLarge title={title} ></LineLarge>
            <div className={styles['userslist']}>
                {dealers.map(user => < DealerCard key={user._id} {...user} />)}
            </div>
        </>

    )
}