import { UserContext } from '../../context/user/UserContext'; // CONTEXTO
import { Navigate } from 'react-router-dom'; // ROUTER DOM
import { useContext } from 'react'; // HOOKS

const ProtectedRouteUser = ({ children }) => {
    const { user } = useContext(UserContext); // AYUDANTES

    if (user === false) {
        return <h1 className="h1">loadingggg</h1>; // LOADER
    }

    if (user) {
        return <Navigate to="/cuenta" />; // REDIRECCIONAMIENTO
    }

    return children;
};

export { ProtectedRouteUser };
