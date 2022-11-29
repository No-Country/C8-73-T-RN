import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { Login } from "../../components/login/Login"; // COMPONENTE
import { useContext } from "react"; // HOOKS

const Inicio = () => {
    const { onLogin } = useContext(LoginContext); // AYUDANTES

    return (
        <>
            {/* COMPONENT LOGIN */}
            {onLogin && <Login />}
            {/* CONTENIDO */}
            <main>contenido</main>
        </>
    );
};

export { Inicio };
