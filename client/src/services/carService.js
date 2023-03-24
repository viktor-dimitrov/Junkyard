import { get, post } from "./requester.js";

const baseUrl =  '/data/cars'



export const getAll = async () => {
    const result = await get(baseUrl);

    return result
}

export const getOne = async (carId) => {

    // let result = await get(`${baseUrl}/${carId}`);

    const where = encodeURIComponent(`_id="${carId}"`);
    const load = encodeURIComponent(`dealer=_ownerId:users`);

    let result = await get(`${baseUrl}?where=${where}&load=${load}`)
   
    return result[0]
}

export const createCar = async (body) => {
    const result = await post(baseUrl, {...body})
 
    return result;
}

// export const deleteUser = async (userId) => {
//         const response = await fetch(`${baseUrl}/${userId}`, {
//         method: 'DELETE',
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     const result = await response.json();
//     return result
// }