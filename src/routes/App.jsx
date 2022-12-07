import '../styles/App.scss'; // ESTILOS DE LA APP
import { LoginContextProvider } from '../context/login/LoginContextProvider'; // CONTEXTO
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // COMPONENTES ROUTER DOM
import { Layout } from '../pages/layout/Layout'; // COMPONENTE
import { Error } from '../pages/error/Error'; // COMPONENTE
import { Inicio } from '../pages/inicio/Inicio'; // COMPONENTE
import { Juegos } from '../pages/juegos/Juegos'; // COMPONENTE
import { Torneos } from '../pages/torneos/Torneos'; // COMPONENTE
import { LayoutLogin } from '../pages/login/LayoutLogin'; // COMPONENTE
import { LoginForm } from '../components/form/LoginForm'; // COMPONENTE
import { RegisterForm } from '../components/form/RegisterForm'; // COMPONENTE

const App = () => {
    return (
        
        <LoginContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="*" element={<Error />} />
                        <Route path="juegos" element={<Juegos />} />
                        <Route path="torneos" element={<Torneos />} />
                        <Route path="login/" element={<LayoutLogin />}>
                            <Route index element={<LoginForm />} />
                            <Route path="registro" element={<RegisterForm />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoginContextProvider>
    );
};

export { App };
