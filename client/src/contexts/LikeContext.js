
import { createContext, useState, useEffect } from 'react'
import { carList } from '../constants/carList';
import * as likeService from '../services/likeService'



export const LikeContext = createContext();


export const LikeProvider = ({
    children
}) => {

    

    const [dealerLikes, setDealerLikes] = useState([]);
    const [carLikes, setCarLikes] = useState([]);

               // DEALER LIKES

    const getDealerLikes = async (dealerId) => {
        const result =  await likeService.getDealerLikes(dealerId);
        setDealerLikes(result);
    }

    const unlikeDealer = async (likeId) => {
         await likeService.unlikeDealer(likeId);
         setDealerLikes(state => state.filter(x => x._id != likeId));
    }
       
    const likeDealer = async (dealerId) => {
        const result = await likeService.likeDealer(dealerId);
        setDealerLikes(state => ([...state, result]))
     }

             //  CAR LIKES

             const getCarLikes = async (carId) => {
                const result =  await likeService.getCarLikes(carId);
                setCarLikes(result);
            }
        
            const unlikeCar = async (likeId) => {
                 await likeService.unlikeCar(likeId);
                 setCarLikes(state => state.filter(x => x._id != likeId));
            }
               
            const likeCar = async (carId) => {
                const result = await likeService.likeCar(carId);
                setCarLikes(state => ([...state, result]))
             }





    const context = {
        dealerLikes,
        likeDealer,
        getDealerLikes,
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