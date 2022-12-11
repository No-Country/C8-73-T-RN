const NextTournaments = ({ className }) => {
    return (
        <article className={`next-tournaments ${className ?? ''}`}>
            <header className="next-tournaments-header">
                {/* TITULO */}
                <h2 className="next-tournaments-header-title">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        xmlSpace="preserve">
                        <g>
                            <path
                                d="M8.4,37.7c0.1-0.9,0.2-1.7,0.3-2.6c0.6-4.4,1.5-8.7,3.6-12.6c0.9-1.8,2.1-3.4,3.7-4.6c1.5-1.1,3.3-1.7,5.2-1.4
		c1.8,0.2,3.6,0.7,5.4,1c1.7,0.3,3.4,0.8,5.1,1c1.1,0.1,2.2-0.1,3.2-0.3c2.2-0.4,4.3-1,6.5-1.5c1.8-0.4,3.6-0.4,5.3,0.3
		c1.5,0.6,2.7,1.7,3.7,3c1.8,2.4,2.9,5.1,3.7,8c1.1,3.8,1.8,7.8,1.7,11.8c0,1.8-0.2,3.5-1,5.2c-0.9,1.9-2.6,2.8-4.7,2.4
		c-1.7-0.3-3.2-1.1-4.6-2.1c-1.3-0.9-2.6-1.9-3.7-3c-2.2-2.1-4.8-3.1-7.8-3.3c-2.5-0.2-5,0-7.4,0.8c-1.3,0.4-2.4,1.2-3.4,2.1
		c-1.6,1.5-3.3,2.9-5.1,4c-1.1,0.7-2.3,1.3-3.6,1.5c-2.3,0.4-4.1-0.6-5-2.8c-0.4-1.1-0.6-2.2-0.7-3.4c0-0.2-0.1-0.5-0.1-0.7
		C8.4,39.6,8.4,38.7,8.4,37.7z M10.6,38.7c0,2.1,0.1,3.5,0.6,4.9c0.5,1.4,1.5,2,2.9,1.6c1-0.3,2-0.6,2.8-1.2
		c1.7-1.2,3.3-2.5,4.9-3.9c1.4-1.2,3-2.1,4.8-2.6c3.6-1,7.3-1.1,11,0c1.7,0.5,3.3,1.3,4.7,2.5c1.4,1.2,2.8,2.4,4.3,3.5
		c1.1,0.8,2.4,1.5,3.8,1.8c1.1,0.2,1.9-0.2,2.4-1.2c0.6-1.1,0.7-2.3,0.8-3.6c0.2-4-0.5-7.9-1.5-11.7c-0.7-2.6-1.6-5.1-3.3-7.3
		c-1.6-2.1-3.6-3.2-6.3-2.8c-1.9,0.3-3.8,0.7-5.7,1.2c-3,0.8-6,0.9-9.1,0.1c-1.9-0.5-3.8-0.9-5.8-1.3c-2-0.3-3.8,0.2-5.4,1.6
		c-1.4,1.3-2.3,2.9-3,4.6C11.6,29.6,10.7,34.4,10.6,38.7z"
                            />
                            <path
                                d="M21.2,22.4c1.7,0.1,2.9,1.2,3.2,2.8c0.1,0.2,0.2,0.3,0.4,0.4c1.6,0.3,2.8,1.7,2.8,3.4c0,1.6-1.1,3-2.8,3.3
		c-0.3,0.1-0.4,0.2-0.4,0.4c-0.3,1.6-1.8,2.8-3.4,2.7c-1.6,0-3-1.2-3.3-2.8c-0.1-0.3-0.2-0.3-0.4-0.4c-2.4-0.5-3.5-3.1-2.3-5.1
		c0.5-0.9,1.3-1.4,2.3-1.6c0.3-0.1,0.4-0.2,0.5-0.5C18,23.5,19.6,22.3,21.2,22.4z M25.5,28.9c0-0.7-0.5-1.2-1.1-1.2
		c-0.2,0-0.5,0-0.7,0c-0.9,0-1.3-0.4-1.3-1.3c0-0.3,0-0.6-0.1-0.9c-0.1-0.6-0.6-1-1.2-0.9c-0.6,0-1.1,0.5-1.2,1.1c0,0.3,0,0.5,0,0.8
		c0,0.8-0.4,1.2-1.2,1.3c-0.3,0-0.6,0-0.8,0c-0.7,0.1-1.1,0.6-1.1,1.2c0,0.6,0.5,1.1,1.2,1.1c0.3,0,0.5,0,0.8,0
		c0.7,0,1.2,0.4,1.2,1.2c0,0.3,0,0.5,0,0.8c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.4,1.3-1.1c0-0.3,0-0.5,0-0.8c0-0.7,0.4-1.1,1.1-1.2
		c0.3,0,0.6,0,1,0C25.1,30,25.5,29.5,25.5,28.9z"
                            />
                            <path d="M44.3,24.7c0,1.1-0.9,2.1-2,2.1c-1.1,0-2.1-0.9-2.1-2c0-1.1,0.9-2.1,2-2.1C43.4,22.7,44.3,23.5,44.3,24.7z" />
                            <path d="M38.1,30.9C37,31,36,30,36,28.9c0-1.1,0.9-2.1,2-2.1c1.1,0,2.1,0.9,2.1,2C40.1,30,39.2,30.9,38.1,30.9z" />
                            <path d="M44.4,28.9c0-1.1,0.9-2,2.1-2c1.1,0,2,0.9,2,2.1c0,1.1-0.9,2-2.1,2C45.3,30.9,44.4,30,44.4,28.9z" />
                            <path d="M44.3,33.1c0,1.1-0.9,2.1-2,2.1c-1.1,0-2-0.9-2-2.1c0-1.1,0.9-2.1,2-2.1C43.4,31,44.3,31.9,44.3,33.1z" />
                        </g>
                    </svg>
                    Próximos torneos
                </h2>
                {/* LINK VER TODOS */}
                <a className="next-tournaments-header-a" href="#">
                    Ver todos
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        xmlSpace="preserve">
                        <path
                            d="M43,31.1L43,31.1l-1.3-1.3l0,0L28.1,16.2c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2L39.6,32L25.9,45.6
	c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0l13.6-13.6v0l1.3-1.3C43.5,32.4,43.5,31.6,43,31.1z"
                        />
                    </svg>
                </a>
            </header>
            {/* CONTENIDO */}
            <article className="next-tournaments-art">
                {/* USUARIOS A COMPETIR */}
                <header className="next-tournaments-art-header">
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        {/* USUARIO */}
                        <h4 className="next-tournaments-profile-user">combat.pedro23</h4>
                    </article>
                    {/* INFORMACION */}
                    <div className="next-tournaments-info">
                        <h3 className="next-tournaments-info-versus">VS</h3>
                        <span className="next-tournaments-info-detail">
                            Encuentro numero <span className="next-tournaments-info-num">14</span>
                        </span>
                    </div>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        <h4 className="next-tournaments-profile-user">combat.pedro2313</h4>
                        {/* USUARIO */}
                    </article>
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                </header>
                {/* BORDE DE LINEA */}
                <span className="next-tournaments-art-border"></span>
                {/* INFORMACION DEL TORNEO*/}
                <footer className="next-tournaments-art-footer">
                    {/* ESTADO DEL TORNEO */}
                    <span className="next-tournaments-state">Activo</span>
                    {/* FECHA DEL TORNEO */}
                    <span className="next-tournaments-date">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4" />
                            <line x1="6.35" y1="20.63" x2="51.17" y2="20.63" />
                            <line x1="16.46" y1="9.63" x2="16.46" y2="4.63" />
                            <line x1="40.42" y1="9.63" x2="40.42" y2="4.63" />
                            <circle cx="45.22" cy="45.44" r="12.43" />
                            <polyline points="45.22 36.7 45.22 45.82 49.57 49.16" />
                        </svg>
                        18 dic 2022 | 4:00 pm -3GTM
                    </span>
                    {/* LUGAR Y JUEGO DEL TORNEO */}
                    <span className="next-tournaments-location">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M16.9,10.79H47a.29.29,0,0,1,.29.28c.11,2.61.51,22.87-13,28.77v7.58H29.7V39.84S17,35.21,16.6,11.1A.3.3,0,0,1,16.9,10.79Z" />
                            <path d="M47.33,14.27h2.89a3.54,3.54,0,0,1,3.54,3.55v4a7.07,7.07,0,0,1-3.13,5.88l-8.9,6" />
                            <path d="M16.73,14.27h-3a3.54,3.54,0,0,0-3.54,3.55v4a7.07,7.07,0,0,0,3.13,5.88L23,34.06" />
                            <rect x="24.89" y="47.42" width="14.62" height="5.79" />
                            <path d="M32.16,16.16l2.25,4.45a.15.15,0,0,0,.14.1l5,.72a.18.18,0,0,1,.1.32L36,25.2a.18.18,0,0,0-.06.17l.86,4.88a.19.19,0,0,1-.27.2l-4.49-2.32a.22.22,0,0,0-.16,0l-4.49,2.32a.19.19,0,0,1-.27-.2L28,25.37A.18.18,0,0,0,28,25.2l-3.61-3.45a.18.18,0,0,1,.1-.32l5-.72a.15.15,0,0,0,.14-.1l2.25-4.45A.18.18,0,0,1,32.16,16.16Z" />
                        </svg>
                        Estadium Arena - MOBILE LEGENDS
                    </span>
                </footer>
            </article>
            {/* CONTENIDO */}
            <article className="next-tournaments-art">
                {/* USUARIOS A COMPETIR */}
                <header className="next-tournaments-art-header">
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        {/* USUARIO */}
                        <h4 className="next-tournaments-profile-user">combat.pedro23</h4>
                    </article>
                    {/* INFORMACION */}
                    <div className="next-tournaments-info">
                        <h3 className="next-tournaments-info-versus">VS</h3>
                        <span className="next-tournaments-info-detail">
                            Encuentro numero <span className="next-tournaments-info-num">14</span>
                        </span>
                    </div>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        <h4 className="next-tournaments-profile-user">combat.pedro2313</h4>
                        {/* USUARIO */}
                    </article>
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                </header>
                {/* BORDE DE LINEA */}
                <span className="next-tournaments-art-border"></span>
                {/* INFORMACION DEL TORNEO*/}
                <footer className="next-tournaments-art-footer">
                    {/* ESTADO DEL TORNEO */}
                    <span className="next-tournaments-state">Activo</span>
                    {/* FECHA DEL TORNEO */}
                    <span className="next-tournaments-date">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4" />
                            <line x1="6.35" y1="20.63" x2="51.17" y2="20.63" />
                            <line x1="16.46" y1="9.63" x2="16.46" y2="4.63" />
                            <line x1="40.42" y1="9.63" x2="40.42" y2="4.63" />
                            <circle cx="45.22" cy="45.44" r="12.43" />
                            <polyline points="45.22 36.7 45.22 45.82 49.57 49.16" />
                        </svg>
                        18 dic 2022 | 4:00 pm -3GTM
                    </span>
                    {/* LUGAR Y JUEGO DEL TORNEO */}
                    <span className="next-tournaments-location">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M16.9,10.79H47a.29.29,0,0,1,.29.28c.11,2.61.51,22.87-13,28.77v7.58H29.7V39.84S17,35.21,16.6,11.1A.3.3,0,0,1,16.9,10.79Z" />
                            <path d="M47.33,14.27h2.89a3.54,3.54,0,0,1,3.54,3.55v4a7.07,7.07,0,0,1-3.13,5.88l-8.9,6" />
                            <path d="M16.73,14.27h-3a3.54,3.54,0,0,0-3.54,3.55v4a7.07,7.07,0,0,0,3.13,5.88L23,34.06" />
                            <rect x="24.89" y="47.42" width="14.62" height="5.79" />
                            <path d="M32.16,16.16l2.25,4.45a.15.15,0,0,0,.14.1l5,.72a.18.18,0,0,1,.1.32L36,25.2a.18.18,0,0,0-.06.17l.86,4.88a.19.19,0,0,1-.27.2l-4.49-2.32a.22.22,0,0,0-.16,0l-4.49,2.32a.19.19,0,0,1-.27-.2L28,25.37A.18.18,0,0,0,28,25.2l-3.61-3.45a.18.18,0,0,1,.1-.32l5-.72a.15.15,0,0,0,.14-.1l2.25-4.45A.18.18,0,0,1,32.16,16.16Z" />
                        </svg>
                        Estadium Arena - MOBILE LEGENDS
                    </span>
                </footer>
            </article>
            {/* CONTENIDO */}
            <article className="next-tournaments-art">
                {/* USUARIOS A COMPETIR */}
                <header className="next-tournaments-art-header">
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        {/* USUARIO */}
                        <h4 className="next-tournaments-profile-user">combat.pedro23</h4>
                    </article>
                    {/* INFORMACION */}
                    <div className="next-tournaments-info">
                        <h3 className="next-tournaments-info-versus">VS</h3>
                        <span className="next-tournaments-info-detail">
                            Encuentro numero <span className="next-tournaments-info-num">14</span>
                        </span>
                    </div>
                    {/* PERFIL */}
                    <article className="next-tournaments-profile">
                        {/* NOMBRE */}
                        <h3 className="next-tournaments-profile-name">Pedro Perez</h3>
                        <h4 className="next-tournaments-profile-user">combat.pedro2313</h4>
                        {/* USUARIO */}
                    </article>
                    {/* IMAGEN */}
                    <picture className="next-tournaments-picture">
                        <img
                            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670456986/assets/photo-pedro_cgvqy5.jpg"
                            alt="usuario"
                        />
                    </picture>
                </header>
                {/* BORDE DE LINEA */}
                <span className="next-tournaments-art-border"></span>
                {/* INFORMACION DEL TORNEO*/}
                <footer className="next-tournaments-art-footer">
                    {/* ESTADO DEL TORNEO */}
                    <span className="next-tournaments-state">Activo</span>
                    {/* FECHA DEL TORNEO */}
                    <span className="next-tournaments-date">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4" />
                            <line x1="6.35" y1="20.63" x2="51.17" y2="20.63" />
                            <line x1="16.46" y1="9.63" x2="16.46" y2="4.63" />
                            <line x1="40.42" y1="9.63" x2="40.42" y2="4.63" />
                            <circle cx="45.22" cy="45.44" r="12.43" />
                            <polyline points="45.22 36.7 45.22 45.82 49.57 49.16" />
                        </svg>
                        18 dic 2022 | 4:00 pm -3GTM
                    </span>
                    {/* LUGAR Y JUEGO DEL TORNEO */}
                    <span className="next-tournaments-location">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none">
                            <path d="M16.9,10.79H47a.29.29,0,0,1,.29.28c.11,2.61.51,22.87-13,28.77v7.58H29.7V39.84S17,35.21,16.6,11.1A.3.3,0,0,1,16.9,10.79Z" />
                            <path d="M47.33,14.27h2.89a3.54,3.54,0,0,1,3.54,3.55v4a7.07,7.07,0,0,1-3.13,5.88l-8.9,6" />
                            <path d="M16.73,14.27h-3a3.54,3.54,0,0,0-3.54,3.55v4a7.07,7.07,0,0,0,3.13,5.88L23,34.06" />
                            <rect x="24.89" y="47.42" width="14.62" height="5.79" />
                            <path d="M32.16,16.16l2.25,4.45a.15.15,0,0,0,.14.1l5,.72a.18.18,0,0,1,.1.32L36,25.2a.18.18,0,0,0-.06.17l.86,4.88a.19.19,0,0,1-.27.2l-4.49-2.32a.22.22,0,0,0-.16,0l-4.49,2.32a.19.19,0,0,1-.27-.2L28,25.37A.18.18,0,0,0,28,25.2l-3.61-3.45a.18.18,0,0,1,.1-.32l5-.72a.15.15,0,0,0,.14-.1l2.25-4.45A.18.18,0,0,1,32.16,16.16Z" />
                        </svg>
                        Estadium Arena - MOBILE LEGENDS
                    </span>
                </footer>
            </article>
        </article>
    );
};

export { NextTournaments };
