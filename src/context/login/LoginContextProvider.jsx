import { LoginContext } from "./LoginContext"; // CONTEXTO
import { useState } from "react"; // HOOK

const LoginContextProvider = ({ children }) => {
    const [onLoginWithOption, updateOnLoginWithOption] = useState(false); // ESTADO

    const values = { onLoginWithOption, updateOnLoginWithOption }; // VALORES DEL CONTEXTO

    return <LoginContext.Provider value={values}> {children}</LoginContext.Provider>;
};

export { LoginContextProvider };
