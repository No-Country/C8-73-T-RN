import '../styles/App.scss'; // ESTILOS DE LA APP
import { UserContextProvider } from '../context/user/UserContextProvider'; // CONTEXTO
import { LoginContextProvider } from '../context/login/LoginContextProvider'; // CONTEXTO
import { ProtectedRouteUser } from './protectedRouteUser.jsx/ProtectedRouteUser'; // COMPONENTE RUTA PROTEGIDA DE USUARIO
import { ProtectedRoute } from './protectedRoute/ProtectedRoute'; // COMPONENTE RUTA PROTEGIDA
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // COMPONENTES ROUTER DOM
import { Layout } from '../pages/layout/Layout'; // COMPONENTE
import { Error } from '../pages/error/Error'; // COMPONENTE
import { Inicio } from '../pages/inicio/Inicio'; // COMPONENTE
import { Juegos } from '../pages/juegos/Juegos'; // COMPONENTE
import { Torneos } from '../pages/torneos/Torneos'; // COMPONENTE
import { LayoutLogin } from '../pages/login/LayoutLogin'; // COMPONENTE
import { LoginForm } from '../components/form/LoginForm'; // COMPONENTE
import { RegisterForm } from '../components/form/RegisterForm'; // COMPONENTE
import { Account } from '../pages/cuenta/Account'; // COMPONENTE

const App = () => {
    return (
        <UserContextProvider>
            <LoginContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Inicio />} />
                            <Route path="*" element={<Error />} />
                            <Route path="juegos" element={<Juegos />} />
                            <Route path="torneos" element={<Torneos />} />
                            <Route
                                path="login/"
                                element={
                                    <ProtectedRouteUser>
                                        <LayoutLogin />
                                    </ProtectedRouteUser>
                                }>
                                <Route index element={<LoginForm />} />
                                <Route path="registro" element={<RegisterForm />} />
                            </Route>
                            <Route
                                path="cuenta"
                                element={
                                    <ProtectedRoute>
                                        <Account />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LoginContextProvider>
        </UserContextProvider>
    );
};

export { App };
