import { NavLink, Outlet } from 'react-router-dom'; // COMPONENTE ROUTER DOM

const LayoutLogin = () => {
    return (
        <main className="layout-login-bg">
            {/* DISEÑO DEL LOGIN */}
            <section className="layout-login">
                {/* TITULO */}
                <h2 className="layout-login-h2">Registrate</h2>
                {/* LISTA DE NAVEGACION */}
                <ul className="layout-login-ul">
                    <li className="layout-login-li">
                        <NavLink
                            to="registro"
                            className={({ isActive }) =>
                                isActive ? 'layout-login-a layout-login-a-active' : 'layout-login-a '
                            }>
                            Registro
                            <div className="layout-login-a-border"></div>
                        </NavLink>
                    </li>
                    <li className="layout-login-li">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'layout-login-a layout-login-a-active' : 'layout-login-a '
                            }
                            end>
                            Inicia sesión
                            <div className="layout-login-a-border"></div>
                        </NavLink>
                    </li>
                </ul>
                {/* CONTENIDO */}
                <Outlet />
            </section>
        </main>
    );
};

export { LayoutLogin };
