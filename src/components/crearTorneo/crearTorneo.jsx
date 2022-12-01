import React from "react";

const CrearTorneo = () => {
    return (
        <div className="body-torneo">
            <div className="title">
                <p>Crea un torneo</p>
            </div>
            <button>Crea un nuevo torneo</button>
            <p>O duplica alguno de tus torneos anteriores</p>
            <p>Solo los últimos 10 torneos aparecen listados</p>
        
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
        
      
    );
  };
  
  export default CrearTorneo;
  