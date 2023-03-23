
import { get, post } from "./requester.js";



const endpoints = {
    "login": "/users/login",
    "register": "/users/register",
    "logout":"/users/logout",
    "myData":"/users/me"

}





export async function login(data) {
    return await post(endpoints.login, data );
  
}

export async function register(data) {

    return await post(endpoints.register, data );
    
}

export async function logout(){
    get(endpoints.logout);
}