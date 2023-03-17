// const baseUrl = 'http://localhost:3030/users/register';

// export const createUser = async (body) => {
//     const response = await fetch(`${baseUrl}`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })
//     const result = await response.json();
//     return result;
// }

import { clearUserData, setUserData } from "./util.js";
import { get, post } from "./requester.js";



const endpoints = {
    "login": "/users/login",
    "register": "/users/register",
    "logout":"/users/logout"

}



export async function login(email, password) {
    const {_id, email: resultEmail, accessToken} = await post(endpoints.login, {email, password} );

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(username, email, phone, password) {
    const {_id, email: resultEmail, accessToken} = await post(endpoints.register, {email, password} );
    
    setUserData({
        _id,
        username,
        phone,
        email: resultEmail,
        accessToken
    });
   
}

export async function logout(){
    get(endpoints.logout);
    clearUserData();

}