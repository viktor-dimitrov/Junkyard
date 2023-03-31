
import { createContext, useState, useContext } from 'react'

import * as likeService from '../services/likeService'
export const LikeContext = createContext();


export const LikeProvider = ({
    children
}) => {

    const [followers, setFollowers] = useState([]);

    const [carLikes, setCarLikes] = useState([]);

               // DEALER LIKES

    const getFollowers = async (dealerId) => {
        const result =  await likeService.getFollowers(dealerId);
        return result
    }
    const getFollowings = async (userId) => {
        const result =  await likeService.getFollowings(userId);
        return result
    }

    const unlikeDealer = async (likeId) => {
         await likeService.unlikeDealer(likeId);
         setFollowers(state => state.filter(x => x._id !== likeId));
    }
       
    const likeDealer = async (dealerId) => {
        const result = await likeService.likeDealer(dealerId);
        setFollowers(state => ([...state, result]));
        return result
     }



             //  CAR LIKES

             const getCarLikes = async (carId) => {
                await likeService.getCarLikes(carId);
           
            }
        
            const unlikeCar = async (likeId) => {
                 await likeService.unlikeCar(likeId);
                 setCarLikes(state => state.filter(x => x._id !== likeId));
            }
               
            const likeCar = async (carId) => {
                const result = await likeService.likeCar(carId);
                setCarLikes(state => ([...state, result]))
             }





    const context = {
        followers,
    
        likeDealer,
        getFollowers,
        getFollowings,
        unlikeDealer,
        carLikes,
        likeCar,
        getCarLikes,
        unlikeCar,
        
    }


    return <>

    < LikeContext.Provider value={context} >
        {children}
    </LikeContext.Provider>
</>


}

export const useLikeContext = () => {
    const context = useContext(LikeContext);

    return context
}