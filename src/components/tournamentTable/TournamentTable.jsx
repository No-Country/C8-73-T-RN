import Clasificacion from "./Clasificacion"
import Tournament from "./Tournament"
import { useState } from "react";
import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK

const TournamentTable = () => {

    const { updateOnCreateTourney } = useContext(LoginContext); // AYUDANTES

    const [ onSelected , setOnSelected ] = useState({
        tournament : true,
        clasificacion : false
    })

    const handleOnCreateTourney = () => {
        updateOnCreateTourney(true);
      }; // EVENTO

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
                        <li onClick={updateOnCreateTourney}>
                            Crear torneo
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