const Tournament = () => {


    const players = [
        {rango:1 , foto : 'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg' ,nombre:'Miguel Lora', pais:'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527284/assets/Punto_activo-01_ky6v43.svg' , partidas:100 , puntos: 25},
        {rango:2 , foto : 'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg' ,nombre:'Jorge Gomez', pais:'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527284/assets/Punto_activo-01_ky6v43.svg' , partidas:100 , puntos: 24},
        {rango:3 , foto : 'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg' ,nombre:'Ana Rendon', pais:'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527284/assets/Punto_activo-01_ky6v43.svg' , partidas:100 , puntos: 23},
        {rango:4 , foto : 'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg' ,nombre:'Pedro Perez', pais:'https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527284/assets/Punto_activo-01_ky6v43.svg' , partidas:100 , puntos: 20},
    ]

    return(
        <div >
            <div className="header-table">
                <div className="category-table-name">
                    <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="3"  stroke="white" fill="none">
                        <path d="M16.9,10.79H47a.29.29,0,0,1,.29.28c.11,2.61.51,22.87-13,28.77v7.58H29.7V39.84S17,35.21,16.6,11.1A.3.3,0,0,1,16.9,10.79Z"/>
                        <path d="M47.33,14.27h2.89a3.54,3.54,0,0,1,3.54,3.55v4a7.07,7.07,0,0,1-3.13,5.88l-8.9,6"/>
                        <path d="M16.73,14.27h-3a3.54,3.54,0,0,0-3.54,3.55v4a7.07,7.07,0,0,0,3.13,5.88L23,34.06"/>
                        <rect x="24.89" y="47.42" width="14.62" height="5.79"/>
                        <path d="M32.16,16.16l2.25,4.45a.15.15,0,0,0,.14.1l5,.72a.18.18,0,0,1,.1.32L36,25.2a.18.18,0,0,0-.06.17l.86,4.88a.19.19,0,0,1-.27.2l-4.49-2.32a.22.22,0,0,0-.16,0l-4.49,2.32a.19.19,0,0,1-.27-.2L28,25.37A.18.18,0,0,0,28,25.2l-3.61-3.45a.18.18,0,0,1,.1-.32l5-.72a.15.15,0,0,0,.14-.1l2.25-4.45A.18.18,0,0,1,32.16,16.16Z"/>
                    </svg>
                    <p>
                        Torneo
                    </p>
                </div>
                <div className="time-table">
                    <p>Temporada finaliza:</p><span>08d</span><span>17h</span><span>52m</span><span>08s</span>
                </div>
            </div>
            {/* ------------------------------------ */}
            <div className="data-table">

                <div className="data-of-right">
                    <div className="header-r">
                        <p>Rango</p>
                        <p>Nombre del jugador</p>
                    </div>
                    {
                        players.map(player=>(
                            <div key={player.rango} className="players-table">
                                <p>0{player.rango}</p>
                                <div className="player-data">
                                    <img src={player.foto} alt="avatar de usuario"/>
                                    <p>{player.nombre}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="data-of-left">
                    <div className="header-l">
                        <p>País</p>
                        <p>Partidas</p>
                        <p>Puntos</p>
                    </div>
                    {
                        players.map(player=>(
                            <div key={player.rango} className="players-table">
                                <img src={player.pais} alt="pais"/>
                                <p>{player.partidas}</p>
                                <p>{player.puntos}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


{/* <img
src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670369638/assets/photo-mariana_bz9vnm.jpg"
alt="avatar de usuario"
/> */}
export default Tournament