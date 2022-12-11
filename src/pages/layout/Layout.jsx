import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { Outlet } from "react-router-dom"; // COMPONENTE REACT ROUTER
import { LoginWithOption } from "../.././components/login/LoginWithOption"; // COMPONENTE
import { Footer } from "../../components/footer/Footer"; // COMPONENTE
import { Header } from "../../components/header/Header"; // COMPONENTE
import { useContext } from "react"; // HOOKS
import { CreateTourney } from "../.././components/createTourney/CreateTourney"; // COMPONENTE
import { CreateATournament } from "../.././components/createTourney/CreateATournament"; // COMPONENTE
import { SelectGame } from "../.././components/createTourney/SelectGame"; // COMPONENTE
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
      {onTourneyData && <TourneyData />}
      {onSetTourney && <SetTourney />}
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
