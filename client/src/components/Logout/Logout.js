
import {  useAuthContext } from "../../contexts/AuthContext";



export default function Logout () {
    const { onLogout } = useAuthContext();
    onLogout();
}