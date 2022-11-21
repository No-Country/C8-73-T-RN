import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire  , faHeart , faGamepad , faArrowRight} from "@fortawesome/free-solid-svg-icons";

const CategoriesTrend = () => {

    const fireIco = <FontAwesomeIcon icon= {faFire} />
    const heartIco = <FontAwesomeIcon icon= {faHeart}/>
    const gamepadIco = <FontAwesomeIcon icon= {faGamepad}/>
    const arrowIco = <FontAwesomeIcon icon= {faArrowRight}/>



    return(
        <div>
            <div className="header-category-container">
                <h3><span><i className="game-category-ico">{gamepadIco}</i></span>Juegos en tendencia</h3>  
                <p>Ver todos <span><i className="game-category-ico">{arrowIco}</i></span></p>                
            </div>

            <div className="games-category-container">
                <div className="game-category">
                    <img src="https://picsum.photos/500"/>

                    <div className="game-category-data">
                        <div className="game-category-data-left">
                            <i className="game-category-ico">{fireIco}</i>
                            <p>152 Torneos</p>
                        </div>
                        <div className="game-category-data-right">
                            <i className="game-category-ico">{heartIco}</i>
                        </div>
                    </div>
                </div>

                {/* PRUEBAS ANTES DE CONSUMIR API */}
                <div className="game-category">
                    <img src="https://picsum.photos/500"/>

                    <div className="game-category-data">
                        <div className="game-category-data-left">
                            <i className="game-category-ico">{fireIco}</i>
                            <p>152 Torneos</p>
                        </div>
                        <div className="game-category-data-right">
                            <i className="game-category-ico">{heartIco}</i>
                        </div>
                    </div>
                </div>
                <div className="game-category">
                    <img src="https://picsum.photos/500"/>

                    <div className="game-category-data">
                        <div className="game-category-data-left">
                            <i className="game-category-ico">{fireIco}</i>
                            <p>152 Torneos</p>
                        </div>
                        <div className="game-category-data-right">
                            <i className="game-category-ico">{heartIco}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesTrend