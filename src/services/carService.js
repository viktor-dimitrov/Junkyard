const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return Object.values(result)
}

export const getOne = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
    const result = await response.json();
    return result
}

export const createCar = async (body) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const result = await response.json();
    return result;
}

export const deleteUser = async (userId) => {
        const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const result = await response.json();
    return result
}