import { get, post, put, del } from "./requester.js";

const baseUrl =  '/data/comments'



export const getAllComments = async () => {
    const result = await get(baseUrl);

    return result
}

export const getOneComment = async (commentId) => {
    const where = encodeURIComponent(`_id="${commentId}"`);
    const load = encodeURIComponent(`dealer=_ownerId:users`);
    let result = await get(`${baseUrl}?where=${where}&load=${load}`)
    return result[0]
}

export const getMyComments = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    const result = await get(`/data/comments?where=${query}`);
    return result
}

export const createComment = async (body) => {
    const result = await post(baseUrl, {...body})
    return result;
}

export const deleteComment = async (commentId) => {
    await del(`${baseUrl}/${commentId}`);
}

export const editComment = async (commentId, body) => {
    const result = await put(`${baseUrl}/${commentId}`, body);
    return result
}