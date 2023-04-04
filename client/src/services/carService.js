import { get, post, put, del } from "./requester.js";

const baseUrl =  '/data/cars'



export const getAll = async () => {
    const result = await get(baseUrl);
    return result
}

export const getOneCar = async (carId) => {
    const where = encodeURIComponent(`_id="${carId}"`);
    const load = encodeURIComponent(`dealer=_ownerId:users`);
    let result = await get(`${baseUrl}?where=${where}&load=${load}`)
    return result[0]
}

export const getPageData = async ( pageSize, offset ) => {
    const result = get(`${baseUrl}?offset=${offset}&pageSize=${pageSize}`);
    return result
}

export const getSearchedCars = async ( brand, model , year) => {
    const query = encodeURIComponent(``);
    const result = await get(`/data/cars?where=${query}`);
    return result
}

export const getMyCars = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    const result = await get(`/data/cars?where=${query}`);
    return result
}



export const createCar = async (body) => {
    const result = await post(baseUrl, {...body})
    return result;
}

export const deleteCar = async (carId) => {
    await del(`${baseUrl}/${carId}`);
}

export const editCar = async (carId, body) => {
    const result = await put(`${baseUrl}/${carId}`, body);
    return result
}

