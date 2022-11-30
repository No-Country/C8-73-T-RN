import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { useContext } from "react"; // HOOK

const Navbar = () => {
    const { updateOnLoginWithOption } = useContext(LoginContext); // AYUDANTES

    const handleOnLoginWithOption = () => updateOnLoginWithOption(true); // EVENTO

    return (
        <nav>
            <div className="title">
                <span>e/ stadium</span>
            </div>
            <ul className="navigation">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Quienes Somos</a>
                </li>
                <li>
                    <a href="#">Juegos</a>
                </li>
                <li>
                    <a href="#">Torneo</a>
                </li>
                <div className="buttons">
                    <button onClick={handleOnLoginWithOption} className="btn-main">
                        Iniciar Sesión
                    </button>
                </div>
            </ul>
        </nav>
    );
};

export { Navbar };
