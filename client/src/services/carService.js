import { get, post, put, del } from "./requester.js";

const baseUrl =  '/data/cars'



export const getAll = async () => {
    const result = await get(baseUrl);

    return result
}

export const getOne = async (carId) => {
    const where = encodeURIComponent(`_id="${carId}"`);
    const load = encodeURIComponent(`dealer=_ownerId:users`);
    let result = await get(`${baseUrl}?where=${where}&load=${load}`)
    return result[0]
}

export const createCar = async (body) => {
    const result = await post(baseUrl, {...body})
    return result;
}

export const deleteCar = async (carId) => {
    await del(`${baseUrl}/${carId}`);
}
