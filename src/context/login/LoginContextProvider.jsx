import { LoginContext } from "./LoginContext"; // CONTEXTO
import { useState } from "react"; // HOOK

const LoginContextProvider = ({ children }) => {
    const [onLoginWithOption, updateOnLoginWithOption] = useState(false); // ESTADO LOGIN

    const [onCreateTourney, updateOnCreateTourney] = useState(false); // ESTADO CREAR TORNEO
    
    const [onCreateATournament, updateOnCreateATournament] = useState(false); // ESTADO CREAR TORNEO
    
    const [onSelectGame, updateOnSelectGame] = useState(false); // ESTADO CREAR TORNEO
    
    const [onSelectConsola, updateOnSelectConsola] = useState(false); // ESTADO CREAR TORNEO
    
    const [onTourneyData, updateOnTourneyData] = useState(false); // ESTADO CREAR TORNEO
    
    const [onSetTourney, updateOnSetTourney] = useState(false); // ESTADO CREAR TORNEO

    


    const values = { onLoginWithOption, updateOnLoginWithOption, onCreateTourney, updateOnCreateTourney, onCreateATournament, updateOnCreateATournament, onSelectGame, updateOnSelectGame, onSelectConsola, updateOnSelectConsola, onTourneyData, updateOnTourneyData, onSetTourney, updateOnSetTourney}; // VALORES DEL CONTEXTO

    return <LoginContext.Provider value={values}> {children}</LoginContext.Provider>;
};

export { LoginContextProvider };
