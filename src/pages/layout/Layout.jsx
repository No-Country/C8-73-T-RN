import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../../components/login/LoginWithOption"; // COMPONENTE
import  {Navbar}  from "../../components/navbar/Navbar"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import {Footer} from "../../components/footer/Footer";


const Layout = () => {
    const { onLoginWithOption } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENTE LOGIN WITH OPTION */}
            {onLoginWithOption && <LoginWithOption />}
            {/* COMPONENTE NAVBAR */}
            <header>
            <Navbar/>
            </header>
            {/* CONTENIDO */}
            <Outlet />
            {/* COMPONENTE FOOTER */}
            <Footer/>
        </>
    );
};

export { Layout };
