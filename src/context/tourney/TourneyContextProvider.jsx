import { TourneyContext } from "./TourneyContext"; // CONTEXTO
import { useState } from "react"; // HOOK

const TourneyContextProvider = ({ children }) => {
    const [onCreateTourney, updateOnCreateTourney] = useState(false); // ESTADO

    const values = { onCreateTourney, updateOnCreateTourney }; // VALORES DEL CONTEXTO

    return <TourneyContext.Provider value={values}> {children}</TourneyContext.Provider>;
};

export { TourneyContextProvider };

//OnCreateTourney