const SelectGame = () => {
  return (
    <div className="search-game">
      <div className="header-game">
        <div className="background-name-modal-game">
          <div className="name-modal-game">
            <i class="fi fi-rr-gamepad"></i>
            <p className="title-modal-game">Selecciona un juego</p>
          </div>
          
        </div>
        <form class="searchgame-container">
            <input type="text" placeholder="Busca tu juego">
              
                {/* <i class="fi fi-rr-search"></i> */}
            </input>
          </form>
        </div>

        <div id="games" className="frame-games">
          <div id="carrusel" className="slider-game">
            <div id="carrusel-slides" className="slides-game">
              <div className="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                ></img>
              </div>
            </div>
            {/* <button class="btn-prev" />
            <button class="btn-next" /> */}
          </div>
        </div>

        
      </div>

  );
};

export { SelectGame };
