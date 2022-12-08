import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../.././components/login/LoginWithOption"; // COMPONENTE
import { Navbar } from "../../components/navbar/Navbar"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import {Footer} from "../../components/footer/Footer";
import PortadaHero from "../../components/hero/PortadaHero";
import Categories from "../../components/categories/Categories";

const Layout = () => {
    const { onLoginWithOption } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENTE LOGIN WITH OPTION */}
            {onLoginWithOption && <LoginWithOption />}
            {/* COMPONENTE NAVBAR */}
            <header>
                <Navbar />
            </header>
            {/* CONTENIDO */}

            {/* CONTENIDO PORTADA HERO */}
            <PortadaHero />

            {/* CONTENIDO CATEGORIAS JUEGOS */}
            <Categories />

            <Outlet />
            {/* COMPONENTE FOOTER */}
            <Footer/>
        </>
    );
};

export { Layout };
