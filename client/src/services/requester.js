


const host = 'http://localhost:3030';

export async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        options.headers['X-Authorization'] = user.accessToken;
    }

    try{
        const response = await fetch(host + url, options);

    

        if (response.status === 204) {
            return response;
        }

   

        // if (response.url === 'http://localhost:3030/users/me') {
        //    const result = await response.json()
        // //    const data =  await JSON.parse(result)
          
        //     return result
        // }

        const result = await response.json();

       

        if (!response.ok) {
       
            throw result;
        }

        return result;

    }catch(err){
       alert(err.message);
       throw err
    }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");