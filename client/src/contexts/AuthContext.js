import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as userService from '../services/userService';



export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage('user',{});

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
        try{
            await userService.logout();
            setAuth(null);
            navigate('/');
        }catch(error){
            console.log(error);
        }
      }
    
    
      const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout
      }

    return <>

        < AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>
    </>
}