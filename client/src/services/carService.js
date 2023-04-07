import { get, post, put, del } from "./requester.js";

const baseUrl = '/data/cars';

export const getAll = async () => {
    const result = await get(baseUrl);
    return result
}

export const getOneCar = async (carId) => {
    const where = encodeURIComponent(`_id="${carId}"`);
    const load = encodeURIComponent(`dealer=_ownerId:users`);
    const result = await get(`${baseUrl}?where=${where}&load=${load}`)
    return result[0]
}

export const getPageData = async (pageSize, offset, { brand, model, year, fuel }) => {

    const queryParams = [];
    if (brand) {
        queryParams.push(encodeURIComponent(`brand="${brand}"`));
    }
    if (model) {
        queryParams.push(encodeURIComponent(`model="${model}"`));
    }
    if (year) {
        queryParams.push(encodeURIComponent(`year="${year}"`));
    }
    if (fuel) {
        queryParams.push(encodeURIComponent(`fuel="${fuel}"`));
    }

    const query = queryParams.join('%20and%20');
    const fullResult = await get(`${baseUrl}?where=${query}`);
    const pageResult = await get(`${baseUrl}?where=${query}&offset=${offset}&pageSize=${pageSize}`);

    return [pageResult, fullResult.length];
}

export const getMyCars = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    const result = await get(`/data/cars?where=${query}`);
    return result
}

export const createCar = async (body) => {
    const result = await post(baseUrl, { ...body });
    return result;
}

export const deleteCar = async (carId) => {
    await del(`${baseUrl}/${carId}`);
}

export const editCar = async (carId, body) => {
    const result = await put(`${baseUrl}/${carId}`, body);
    return result;
}

