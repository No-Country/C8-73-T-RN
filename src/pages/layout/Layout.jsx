import { LoginContext } from '../../context/login/LoginContext'; // CONTEXTO
import { Outlet } from 'react-router-dom'; // COMPONENTE REACT ROUTER
import { LoginWithOption } from '../.././components/login/LoginWithOption'; // COMPONENTE
import { Footer } from '../../components/footer/Footer'; // COMPONENTE
import { Header } from '../../components/header/Header'; // COMPONENTE
import { useContext } from 'react'; // HOOKS

const Layout = () => {
    const { onLoginWithOption } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENTE LOGIN WITH OPTION */}
            {onLoginWithOption && <LoginWithOption />}
            {/* COMPONENTE */}
            <Header />
            {/* CONTENIDO */}
            <Outlet />
            {/* COMPONENTE */}
            <Footer />
        </>
    );
};

export { Layout };
