import { get, post, del } from './requester.js'


export const likeDealer = async (dealerId) => {
    const result = await post("/data/dealerLikes", {dealerId})
    return result;
}

export const unlikeDealer = async (likeId) => {
     await del(`/data/dealerLikes/${likeId}`);
}

export const getFollowers = async (dealerId) => {
    const query = encodeURIComponent(`dealerId="${dealerId}"`)
    const load = encodeURIComponent(`userInfo=_ownerId:users`);
    const result = await get(`/data/dealerLikes?where=${query}&load=${load}`)
    return result
}

export const getFollowings = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`)
    const load = encodeURIComponent(`userInfo=dealerId:users`);
    const result = await get(`/data/dealerLikes?where=${query}&load=${load}`)
    return result
}

export const getMyDealerLike = async (dealerId, userId) => {
    const result = await get(`/data/dealerLikes?where=dealerId%3D%22${dealerId}%22%20and%20_ownerId%3D%22${userId}%22`);
    return result
}

export const likeCar = async (carId) => {
    const result = await post("/data/carLikes", {carId})
    return result;
}

export const unlikeCar = async (likeId) => {
     await del(`/data/carLikes/${likeId}`);
}

export const getCarLikes = async (carId) => {
    const query = encodeURIComponent(`carId="${carId}"`)
    const result = await get(`/data/carLikes?where=${query}`)
    return result;
}

export const getMyCarLike = async (carId, userId) => {
    const result = await get(`/data/carLikes?where=carId%3D%22${carId}%22%20and%20_ownerId%3D%22${userId}%22`);
    return result;
}

export const getFavoriteCars = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    const load = encodeURIComponent(`carInfo=carId:cars`);
    const result = await get(`/data/carLikes?where=${query}&load=${load}`);
    const cars = result.map( like => like.carInfo)
    return cars
}