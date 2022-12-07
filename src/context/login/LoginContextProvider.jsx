import { LoginContext } from "./LoginContext"; // CONTEXTO
import { useState } from "react"; // HOOK

const LoginContextProvider = ({ children }) => {
    const [onLoginWithOption, updateOnLoginWithOption] = useState(false); // ESTADO LOGIN

    const [onCreateTourney, updateOnCreateTourney] = useState(false); // ESTADO CREAR TORNEO
    
    const [onCreateATournament, updateCreateATournament] = useState(false); // ESTADO CREAR TORNEO


    const values = { onLoginWithOption, updateOnLoginWithOption, onCreateTourney, updateOnCreateTourney, onCreateATournament, updateCreateATournament }; // VALORES DEL CONTEXTO

    return <LoginContext.Provider value={values}> {children}</LoginContext.Provider>;
};

export { LoginContextProvider };
