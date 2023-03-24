
import { createContext, useState, useEffect } from 'react'
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
       
  
    const onClickLikeDealer = async (dealerId) => {
        const result = await likeService.likeDealer(dealerId);
        setDealerLikes(state => ([...state, result]))
     }

    const context = {
        dealerLikes,
        onClickLikeDealer,
        getDealerLikes,
        
    }


    return <>

    < LikeContext.Provider value={context} >
        {children}
    </LikeContext.Provider>
</>


}