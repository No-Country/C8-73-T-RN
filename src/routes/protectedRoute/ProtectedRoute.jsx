import { UserContext } from '../.././context/user/UserContext'; // CONTEXTO
import { Navigate } from 'react-router-dom'; // ROUTER DOM
import { useContext } from 'react'; // HOOKS

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext); // CONTEXTO

    if (user === false) {
        return <h1>loadingggg</h1>; // COMPONENTE LOADER
    }

    if (user === null) {
        return <Navigate to="/login" />; // REDIRECCIONAMIENTO
    }
    return children;
};

export { ProtectedRoute };
