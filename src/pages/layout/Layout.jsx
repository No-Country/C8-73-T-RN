import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../.././components/login/LoginWithOption"; // COMPONENTE
import { CreateTourney } from "../.././components/createTourney/CreateTourney"; // COMPONENTE
import { CreateATournament } from "../.././components/createTourney/CreateATournament"; // COMPONENTE
import { SelectGame } from "../.././components/createTourney/SelectGame"; // COMPONENTE
import { Navbar } from "../../components/navbar/Navbar"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import { Footer } from "../../components/footer/Footer";
import { SelectConsola } from "../../components/createTourney/SelectConsola";
import { SetTourney } from "../../components/createTourney/SetTourney";
import { TourneyData } from "../../components/createTourney/TourneyData";

const Layout = () => {
  const {
    onLoginWithOption,
    onCreateTourney,
    onCreateATournament,
    onSelectGame,
    onSelectConsola,
    onTourneyData,
    onSetTourney,
  } = useContext(LoginContext); // AYUDANTES

  return (
    <>
      {/* COMPONENTE LOGIN WITH OPTION */}
      {onLoginWithOption && <LoginWithOption />}
      {onCreateTourney && <CreateTourney />}
      {onCreateATournament && <CreateATournament />}
      {onSelectGame && <SelectGame />}
      {onSelectConsola && <SelectConsola />}
      {onTourneyData && <TourneyData/>}
      {onSetTourney && <SetTourney/>}
      {/* <CreateATournament/> */}
      {/* <SelectGame/> */}
      {/* <SelectConsola/> */}
      {/* <TourneyData/> */}
      {/* <SetTourney/> */}
      {/* COMPONENTE NAVBAR */}
      <header>
        <Navbar />
      </header>
      {/* CONTENIDO */}
      <Outlet />
      {/* COMPONENTE FOOTER */}
      <Footer />
    </>
  );
};

export { Layout };
