


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

    if( user && user.accessToken){
        options.headers['X-Authorization'] = user.accessToken;
    }

    try{
        const response = await fetch(host + url, options);

    

        if (response.status === 204) {
      
            return 
        }

        if (response.status === 403) {
         
            return
        }


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