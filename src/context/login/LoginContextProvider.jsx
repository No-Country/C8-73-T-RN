import { LoginContext } from "./LoginContext"; // CONTEXTO
import { useState } from "react"; // HOOK

const LoginContextProvider = ({ children }) => {
    const [onLogin, updateOnLogin] = useState(false); // ESTADO

    const values = { onLogin, updateOnLogin }; // VALORES DEL CONTEXTO

    return <LoginContext.Provider value={values}> {children}</LoginContext.Provider>;
};

export { LoginContextProvider };
