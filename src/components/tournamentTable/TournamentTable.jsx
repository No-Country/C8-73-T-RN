import Clasificacion from "./Clasificacion"
import Tournament from "./Tournament"
import { useState } from "react";


const TournamentTable = () => {

    const [ onSelected , setOnSelected ] = useState({
        tournament : true,
        clasificacion : false
    })

    return(
        <div className="tournament-table">

            <div className="nav-table">
                <div className="nav-table-right">
                    <ul>
                        <li onClick={() => {setOnSelected({
                            tournament : true,
                            clasificacion : false
                        })}} 
                        
                            className={
                                onSelected.tournament ? 'nav-activated' : 'nav-desactivated'
                            }
                        >
                            Torneos
                        </li>
                        <li onClick={() => {setOnSelected({
                            tournament : false,
                            clasificacion : true
                        })}}
                            className={
                                onSelected.clasificacion ? 'nav-activated' : 'nav-desactivated'
                        }
                        >
                            <p>Clasificacion</p>
                        </li>
                        {/* Tu parte Cari */}
                        <li>
                            Torneos
                        </li>
                    </ul>
                </div>

                <div className="nav-table-left">
                    Ver todos
                </div>
            </div>
            <div className="content-of-table">
                    {
                        onSelected.tournament ? <Tournament/> : <Clasificacion />
                    }
            </div>


        </div>
    )


}

export default TournamentTable