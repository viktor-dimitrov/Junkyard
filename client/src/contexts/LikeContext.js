
import { createContext, useState, useEffect } from 'react'
import { carList } from '../constants/carList';
import * as likeService from '../services/likeService'



export const LikeContext = createContext();


export const LikeProvider = ({
    children
}) => {

    const [dealerLikes, setDealerLikes] = useState([]);

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

    const context = {
        dealerLikes,
        likeDealer,
        getDealerLikes,
        unlikeDealer,
        
    }


    return <>

    < LikeContext.Provider value={context} >
        {children}
    </LikeContext.Provider>
</>


}