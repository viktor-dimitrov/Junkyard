import DealerCard from "../Details/DealerCard"
import LineLarge from "../Lines/LineLarge"

export default function UsersList ({
    title,
    users
}) {




const dealers = users.map( user => user = user.userInfo)




    return (

        <>

        < LineLarge title={title} ></LineLarge>

        {dealers.map(user => < DealerCard key={user._id} {...user} /> )}

        </>

    )
}