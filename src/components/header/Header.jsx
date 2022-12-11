import { LoginContext } from '../../context/login/LoginContext'; // CONTEXTO
import { UserContext } from '../../context/user/UserContext'; // CONTEXTO
import { Link, NavLink } from 'react-router-dom'; // COMPONENTE ROUTER DOM
import { useContext, useState } from 'react'; // HOOKS

const Header = () => {
    const { updateOnLoginWithOption } = useContext(LoginContext); // AYUDANTES

    const { user, signOutUser } = useContext(UserContext); // AYUDANTES

    const [onPhotoUser, updateOnPhotoUser] = useState(null); // ESTADO

    const handleOnPhotoUser = () => {
        updateOnPhotoUser('nav-user-ul-active');
    }; // EVENTO

    const handleOnLoginWithOption = () => {
        updateOnLoginWithOption(true);
    }; // EVENTO

    const handleOnUserOverlay = (ev) => {
        if (ev.target === ev.currentTarget) return updateOnPhotoUser(null);
    }; // EVENTO

    const handleSignOutUser = () => {
        updateOnPhotoUser(null);
        signOutUser();
    }; // EVENTO

    return (
        <header className="header">
            {/* TITULO */}
            <h1 className="header-title">
                <Link to="/">e/stadium</Link>
            </h1>
            {/* BUSCADOR */}
            <div className="header-search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
                <input type="search" name="search" id="search" placeholder="Busca tu juego" />
            </div>
            {/* BARRA DE NAVEGACION */}
            <nav className="nav">
                <ul className="nav-ul">
                    {/* LINK DE USUARIO */}
                    {user && (
                        <li className="nav-li nav-user">
                            <picture onClick={handleOnPhotoUser} className="nav-user-picture">
                                <img
                                    src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg"
                                    alt="avatar de usuario"
                                />
                            </picture>
                            <NavLink className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')} to="/cuenta">
                                {user.displayName}
                                <div className="nav-a-border"></div>
                            </NavLink>
                            <ul className={`nav-user-ul ${onPhotoUser ?? ''}`}>
                                <li className="nav-user-li">Editar perfil</li>
                                <li onClick={handleSignOutUser} className="nav-user-li">
                                    Cerrar sesión
                                </li>
                            </ul>
                            <div
                                onClick={handleOnUserOverlay}
                                className={`nav-user-overlay ${onPhotoUser ? 'nav-user-overlay-active' : ''}`}></div>
                        </li>
                    )}
                    <li className="nav-li">
                        <NavLink className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')} to="/">
                            Inicio
                            <div className="nav-a-border"></div>
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')} to="/juegos">
                            Juegos
                            <div className="nav-a-border"></div>
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')} to="/torneos">
                            Torneos
                            <div className="nav-a-border"></div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* BOTON INICIAR SESION */}
            {user === null && (
                <button className="header-btn" onClick={handleOnLoginWithOption}>
                    Iniciar Sesión
                </button>
            )}
        </header>
    );
};

export { Header };
