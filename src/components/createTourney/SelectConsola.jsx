const SelectConsola = () => {
    return (
      <div className="search-consola">
        <div className="header-consola">
          <div className="background-name-modal-consola">
            <div className="name-modal-consola">
              <i class="fi fi-rr-consolapad"></i>
              <p className="title-modal-consola">Selecciona la consola</p>
            </div>
            
          </div>
          <form class="searchconsola-container">
              <input type="text" placeholder="Busca tu juego">
                
                  {/* <i class="fi fi-rr-search"></i> */}
              </input>
            </form>
          </div>
  
          <div id="consolas" className="frame-consolas">
            <div className="consola">
            <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670284305/assets/pc-removebg-preview_kthaog.png" className="pc"></img>
            <p className="name-consola">PC</p>
            </div>
            <div className="consola">
            <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670284305/assets/ps5-removebg-preview_qpbekz.png" className="consolas-juegos"></img>
            <p className="name-consola">Playstation 5</p>
            </div>
            <div className="consola">

            <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670286281/assets/xbox-removebg-preview_eostjp.png" className="consolas-juegos"></img>
            <p className="name-consola">Xbox</p>
            </div>
            <div className="consola">
            <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670284305/assets/ps4-removebg-preview_mpfccj.png" className="consolas-juegos"></img>
            <p className="name-consola">Playstation 4</p>
            </div>
            <div className="consola"><img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670285892/assets/iphone_cyenv4.png" className="pc"></img>
            <p className="name-consola">Movil</p>
            </div>
            
          </div>
  
          
        </div>
  
    );
  };
  
  export { SelectConsola };
  