import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { TourneyContext } from "../../context/tourney/TourneyContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../.././components/login/LoginWithOption"; // COMPONENTE
import { CreateTourney } from "../.././components/createTourney/CreateTourney"; // COMPONENTE
import { CreateATournament } from "../.././components/createTourney/CreateATournament"; // COMPONENTE
import { SelectGame } from "../.././components/createTourney/SelectGame"; // COMPONENTE
import { SelectConsola } from "../.././components/createTourney/SelectConsola"; // COMPONENTE
import { TourneyData } from "../.././components/createTourney/TourneyData"; // COMPONENTE
import { Navbar } from "../../components/navbar/Navbar"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import {Footer} from "../../components/footer/Footer";

const Layout = () => {
    const { onLoginWithOption, onCreateTourney } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENTE LOGIN WITH OPTION */}
            {onLoginWithOption && <LoginWithOption />}
            {onCreateTourney && <CreateTourney />}
            <CreateATournament/>
            <SelectGame/>
            <SelectConsola/>
            <TourneyData/>
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
