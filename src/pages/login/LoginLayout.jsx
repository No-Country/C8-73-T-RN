import { NavLink, Outlet } from "react-router-dom"; // COMPONENTE ROUTER DOM

const LoginLayout = () => {
    return (
        <main className="login-layout-bg">
            {/* DISEÑO DEL LOGIN */}
            <section className="login-layout">
                {/* TITULO */}
                <h2 className="login-layout-h2">Registrate</h2>
                {/* LISTA DE NAVEGACION */}
                <ul className="login-layout-ul">
                    <li className="login-layout-li">
                        <NavLink to="registro" className="login-layout-a">
                            Registro
                        </NavLink>
                    </li>
                    <li className="login-layout-li">
                        <NavLink to="/login" className="login-layout-a">
                            Inicia sesión
                        </NavLink>
                    </li>
                </ul>
                <label htmlFor="email">
                    Gmail
                    <input id="email" type="gmail" />
                </label>
                <Outlet />
            </section>
        </main>
    );
};

export { LoginLayout };
