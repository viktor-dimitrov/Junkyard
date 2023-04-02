import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as userService from '../services/userService';



export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage('user', {});

    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try{
          const result = await userService.login(data)
          setAuth(result);
            navigate('/catalog')
        
        }catch(error) {
          console.log(error)
        }
      }
    
      const onRegisterSubmit = async (data) => {
        try{
          const result = await userService.register(data);
          setAuth(result);
             navigate('/catalog');
        }catch(error){
          console.log(error)
        }
      }

      const onLogout = async () => {
        await userService.logout()
            setAuth({});
            navigate('/');
      }
    
      const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        userName: auth?.username,
        phone: auth.phone,
        email: auth.email,
        imageUrl: auth.imageUrl,
        isAuth: !!auth?.accessToken,
      }

    return <>

        < AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>
    </>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context
}