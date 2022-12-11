import React from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const CategoriesTrend = () => {


    return(
        <div>
            <div className="header-category-container">
                {/* <i className="game-category-ico">{gamepadIco}</i> */}
                <h3><span></span>Juegos en tendencia</h3>  
                {/* <i className="game-category-ico">{arrowIco}</i> */}
                <p>Ver todos <span></span></p>                
            </div>

            <div className="games-category-container">
                <div className="slider-container-of-cards">
                    <Glider
                        draggable
                        slidesToShow={3}
                        slidesToScroll={3}
                        scrollLock
                        gap={100}
                        responsive={[
                            {
                              breakpoint: 864,
                              settings: {
                                slidesToShow: 3,
                              },
                            },
                          ]}
                        
                    >
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    
                        <div className="slider">
                            <div className="img-category-game"></div>
                            <div className="game-category-data">
                                <div className="game-category-data-left">
                                    {/* <i className="game-category-ico">{fireIco}</i> */}
                                        <p>152 Torneos</p>
                                </div>
                                <div className="game-category-data-right">
                                    {/* <i className="game-category-ico">{heartIco}</i> */}
                                </div>
                            </div>
                        </div>    

       
     
                    </Glider>
                </div>
                {/* PRUEBAS ANTES DE CONSUMIR API */}
            </div>

        </div>
    )
}
export default CategoriesTrend