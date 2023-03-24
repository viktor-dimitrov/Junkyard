import { get, post } from './requester.js'


export const likeDealer = async (dealerId) => {
    const result = await post("/data/dealerLikes", {dealerId})
 
    return result;
}

export const getDealerLikes = async (dealerId) => {

    const query = encodeURIComponent(`dealerId="${dealerId}"`)

    const result = await get(`/data/dealerLikes?where=${query}`)

    return result
}