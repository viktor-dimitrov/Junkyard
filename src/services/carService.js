import { get, post } from "./requester.js";

const endpoints = {
    "getAll": "/data/cars/",
    "postCar": "/data/cars/",
    "getOne":"/data/cars/",
    "deleteCar":"/data/cars/"

}


export const getAll = async () => {
    const result = await get(endpoints.getAll);

    return result
}

export const getOne = async (carId) => {
    const result = await get(`${endpoints.getOne}/${carId}`);
   
    return result
}

export const createCar = async (body) => {
    const result = await post(endpoints.postCar, {body})
 
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