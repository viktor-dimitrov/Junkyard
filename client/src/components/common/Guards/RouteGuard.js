import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../contexts/AuthContext"




export const RouteGuard = () => {
    const { isAuth } = useAuthContext();
    
    if (!isAuth) {
        return < Navigate to='/login' />
    }


    return < Outlet />
}