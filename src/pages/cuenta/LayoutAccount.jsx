import { NavLink, Outlet } from 'react-router-dom'; // COMPONENTE ROUTER DOM

const LayoutAccount = () => {
    return (
        <section className="layout-account">
            {/* LISTA DE NAVEGACION */}
            <ul className="layout-account-ul">
                <li className="layout-account-li">
                    <NavLink
                        to="#"
                        className={({ isActive }) =>
                            isActive ? 'layout-account-a layout-account-a-active' : 'layout-account-a '
                        }>
                        Resumen de perfil
                        <div className="layout-account-a-border"></div>
                    </NavLink>
                </li>
                <li className="layout-account-li">
                    <NavLink
                        to="mistorneos"
                        className={({ isActive }) =>
                            isActive ? 'layout-account-a layout-account-a-active' : 'layout-account-a '
                        }>
                        Torneos unidos
                        <div className="layout-account-a-border"></div>
                    </NavLink>
                </li>
                <li className="layout-account-li">
                    <NavLink
                        to="proximostorneos"
                        className={({ isActive }) =>
                            isActive ? 'layout-account-a layout-account-a-active' : 'layout-account-a '
                        }>
                        Proximos torneos
                        <div className="layout-account-a-border"></div>
                    </NavLink>
                </li>
            </ul>
            {/* CONTENIDO */}
            <Outlet />
        </section>
    );
};

export { LayoutAccount };
