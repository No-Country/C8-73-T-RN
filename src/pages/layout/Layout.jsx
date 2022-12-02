import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { TourneyContext } from "../../context/tourney/TourneyContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../.././components/login/LoginWithOption"; // COMPONENTE
import { CreateTourney } from "../.././components/createTourney/CreateTourney"; // COMPONENTE
import { CreateATournament } from "../.././components/createTourney/CreateATournament"; // COMPONENTE
import { Navbar } from "../../components/navbar/Navbar"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import {Footer} from "../../components/footer/Footer";

const Layout = () => {
    const { onLoginWithOption } = useContext(LoginContext); // AYUDANTES
    const { onCreateTourney } = useContext(TourneyContext); // AYUDANTES

    return (
        <>
            {/* COMPONENTE LOGIN WITH OPTION */}
            {onLoginWithOption && <LoginWithOption />}
            {onCreateTourney && <CreateTourney />}
            {/* <CreateTourney/> */}
            {/* <CreateATournament/> */}
            {/* COMPONENTE NAVBAR */}
            <header>
                <Navbar />
            </header>
            {/* CONTENIDO */}
            <Outlet />
            {/* COMPONENTE FOOTER */}
            <Footer/>
        </>
    );
};

export { Layout };
