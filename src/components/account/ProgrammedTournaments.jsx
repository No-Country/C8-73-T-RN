const ProgrammedTournaments = ({ className }) => {
    return (
        <article className={`programmed-tournaments ${className ?? ''}`}>
            <header className="programmed-tournaments-header">
                {/* TITULO */}
                <h2 className="programmed-tournaments-header-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    Torneos programados
                </h2>
                {/* BUSCADOR */}
                <div className="programmed-tournaments-header-search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    <input type="search" name="search" id="search" placeholder="Busca tu juego" />
                </div>
                {/* FILTROS */}
                <div className="programmed-tournaments-header-filter">
                    {/* ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    {/* NOMBRE */}
                    <span className="programmed-tournaments-header-filter-name">TODOS LOS TORNEOS</span>
                    {/* ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                </div>
            </header>
            {/* CONTENIDO */}
            <article className="programmed-tournaments-art">
                {/* IMAGEN */}
                <picture className="programmed-tournaments-art-picture">
                    <img
                        src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851650/assets/Fifa_22_xpotfe.jpg"
                        alt="portada del juego"
                    />
                </picture>
                {/* INFORMACION DEL TORNEO */}
                <header className="programmed-tournaments-art-header">
                    {/* DETALLES DEL TORNEO*/}
                    <div className="programmed-tournaments-details">
                        <h2 className="programmed-tournaments-details-detail">
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
                            Eliminacion individual
                        </h2>
                        <h3 className="programmed-tournaments-details-detail">
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
                            Premio garantizado
                        </h3>
                        <h4 className="programmed-tournaments-details-detail">
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
                            Temporada de clasificacion
                        </h4>
                    </div>
                    {/* NOMBRE DEL TORNEO */}
                    <h2 className="programmed-tournaments-art-header-name">GL ARENA FIFA 2022 CHAMPIONS</h2>
                    {/* FECHA DEL TORNEO */}
                    <div className="programmed-tournaments-calendary">
                        <h3 className="programmed-tournaments-calendary-date">
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
                            Estadium eSports
                        </h3>
                        <h4 className="programmed-tournaments-calendary-date">
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
                            134
                        </h4>
                        <h5 className="programmed-tournaments-calendary-date">
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
                            18 dic 18:00PM - 3GMT
                        </h5>
                    </div>
                </header>
                {/* BOTON INICIAR AHORA */}
                <button className="programmed-tournaments-art-btn">Inicia ahora</button>
            </article>
            {/* CONTENIDO */}
            <article className="programmed-tournaments-art">
                {/* IMAGEN */}
                <picture className="programmed-tournaments-art-picture">
                    <img
                        src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851649/assets/Dota_2_debwcp.jpg"
                        alt="portada del juego"
                    />
                </picture>
                {/* INFORMACION DEL TORNEO */}
                <header className="programmed-tournaments-art-header">
                    {/* DETALLES DEL TORNEO*/}
                    <div className="programmed-tournaments-details">
                        <h2 className="programmed-tournaments-details-detail">
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
                            Eliminacion individual
                        </h2>
                        <h3 className="programmed-tournaments-details-detail">
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
                            Premio garantizado
                        </h3>
                        <h4 className="programmed-tournaments-details-detail">
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
                            Temporada de clasificacion
                        </h4>
                    </div>
                    {/* NOMBRE DEL TORNEO */}
                    <h2 className="programmed-tournaments-art-header-name">GL ARENA FIFA 2022 CHAMPIONS</h2>
                    {/* FECHA DEL TORNEO */}
                    <div className="programmed-tournaments-calendary">
                        <h3 className="programmed-tournaments-calendary-date">
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
                            Estadium eSports
                        </h3>
                        <h4 className="programmed-tournaments-calendary-date">
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
                            134
                        </h4>
                        <h5 className="programmed-tournaments-calendary-date">
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
                            18 dic 18:00PM - 3GMT
                        </h5>
                    </div>
                </header>
                {/* BOTON INICIAR AHORA */}
                <button className="programmed-tournaments-art-btn">Inicia ahora</button>
            </article>
            {/* CONTENIDO */}
            <article className="programmed-tournaments-art">
                {/* IMAGEN */}
                <picture className="programmed-tournaments-art-picture">
                    <img
                        src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/Fortnite_cofsxb.jpg"
                        alt="portada del juego"
                    />
                </picture>
                {/* INFORMACION DEL TORNEO */}
                <header className="programmed-tournaments-art-header">
                    {/* DETALLES DEL TORNEO*/}
                    <div className="programmed-tournaments-details">
                        <h2 className="programmed-tournaments-details-detail">
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
                            Eliminacion individual
                        </h2>
                        <h3 className="programmed-tournaments-details-detail">
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
                            Premio garantizado
                        </h3>
                        <h4 className="programmed-tournaments-details-detail">
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
                            Temporada de clasificacion
                        </h4>
                    </div>
                    {/* NOMBRE DEL TORNEO */}
                    <h2 className="programmed-tournaments-art-header-name">GL ARENA FIFA 2022 CHAMPIONS</h2>
                    {/* FECHA DEL TORNEO */}
                    <div className="programmed-tournaments-calendary">
                        <h3 className="programmed-tournaments-calendary-date">
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
                            Estadium eSports
                        </h3>
                        <h4 className="programmed-tournaments-calendary-date">
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
                            134
                        </h4>
                        <h5 className="programmed-tournaments-calendary-date">
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
                            18 dic 18:00PM - 3GMT
                        </h5>
                    </div>
                </header>
                {/* BOTON INICIAR AHORA */}
                <button className="programmed-tournaments-art-btn">Inicia ahora</button>
            </article>
            {/* CONTENIDO */}
            <article className="programmed-tournaments-art">
                {/* IMAGEN */}
                <picture className="programmed-tournaments-art-picture">
                    <img
                        src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/League_of_Legends_cbxkk7.webp"
                        alt="portada del juego"
                    />
                </picture>
                {/* INFORMACION DEL TORNEO */}
                <header className="programmed-tournaments-art-header">
                    {/* DETALLES DEL TORNEO*/}
                    <div className="programmed-tournaments-details">
                        <h2 className="programmed-tournaments-details-detail">
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
                            Eliminacion individual
                        </h2>
                        <h3 className="programmed-tournaments-details-detail">
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
                            Premio garantizado
                        </h3>
                        <h4 className="programmed-tournaments-details-detail">
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
                            Temporada de clasificacion
                        </h4>
                    </div>
                    {/* NOMBRE DEL TORNEO */}
                    <h2 className="programmed-tournaments-art-header-name">GL ARENA FIFA 2022 CHAMPIONS</h2>
                    {/* FECHA DEL TORNEO */}
                    <div className="programmed-tournaments-calendary">
                        <h3 className="programmed-tournaments-calendary-date">
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
                            Estadium eSports
                        </h3>
                        <h4 className="programmed-tournaments-calendary-date">
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
                            134
                        </h4>
                        <h5 className="programmed-tournaments-calendary-date">
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
                            18 dic 18:00PM - 3GMT
                        </h5>
                    </div>
                </header>
                {/* BOTON INICIAR AHORA */}
                <button className="programmed-tournaments-art-btn">Inicia ahora</button>
            </article>
        </article>
    );
};

export { ProgrammedTournaments };
