import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { LoginWithOption } from "../../components/login/LoginWithOption"; // COMPONENTE
import { useContext } from "react"; // HOOKS

const Inicio = () => {
    const { onLoginWithOption } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENT LOGIN */}
            {onLoginWithOption && <LoginWithOption />}
            {/* CONTENIDO */}
            <main>contenido</main>
        </>
    );
};

export { Inicio };
