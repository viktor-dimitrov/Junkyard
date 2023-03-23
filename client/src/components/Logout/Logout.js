import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export default function Logout () {
    const { onLogout } = useContext(AuthContext);
    onLogout();
}