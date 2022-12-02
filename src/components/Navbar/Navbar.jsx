import { LoginContext } from "../../context/login/LoginContext"; // CONTEXTO
import { TourneyContext } from "../../context/tourney/TourneyContext"; // CONTEXTO
import { useContext } from "react"; // HOOK

const Navbar = () => {
  const { updateOnLoginWithOption } = useContext(LoginContext); // AYUDANTES

  const handleOnLoginWithOption = () => updateOnLoginWithOption(true); // EVENTO

    return (
        <nav>
            
                <span className="title">e/ stadium</span>
            
            
            
            <input type="text" className="search" />
            
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
