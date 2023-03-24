import { get, post, del } from './requester.js'


export const likeDealer = async (dealerId) => {
    const result = await post("/data/dealerLikes", {dealerId})
    return result;
}

export const unlikeDealer = async (likeId) => {

     await del(`/data/dealerLikes/${likeId}`);
   
}

export const getDealerLikes = async (dealerId) => {
    const query = encodeURIComponent(`dealerId="${dealerId}"`)
    const result = await get(`/data/dealerLikes?where=${query}`)
    return result
}

export const getMyDealerLike = async (dealerId, userId) => {
    const result = await get(`/data/dealerLikes?where=dealerId%3D%22${dealerId}%22%20and%20_ownerId%3D%22${userId}%22`);
    return result
}