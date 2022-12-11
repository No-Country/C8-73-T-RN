import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK
import {BiSearchAlt2} from "react-icons/bi";

const SelectGame = () => {

 const { updateOnSelectGame, updateOnSelectConsola } = useContext(LoginContext); // AYUDANTES

  

  const handleOnSelectAGame = () => {
    updateOnSelectGame(false)
    updateOnSelectConsola(true)
  }; // EVENTO
  
  

 

  return (
    <div className="search-game">
      <div className="header-game">
        <div className="background-name-modal-game">
          <div className="name-modal-game">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527282/assets/Icono_Control_de_Juego_kg0bej.svg" className="icono-control-de-juego"></img>
            {/* <i class="fi fi-rr-gamepad"></i> */}
            <p className="title-modal-game">Selecciona un juego</p>
          </div>
          
        </div>
        <form className="searchgame-container">
        <BiSearchAlt2 className="input-icon"/>
            <input className="input-search" type="text" placeholder="Busca tu juego">
              
                
            </input>
          </form>
        </div>

        <div id="games" className="frame-games">
          <div id="carrusel" className="slider-game">
            <div id="carrusel-slides" className="slides-game">
              <div className="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851650/assets/PlayerUnknown_Battlegrounds_k5ysj4.webp"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/League_of_Legends_cbxkk7.webp"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851650/assets/Fifa_22_xpotfe.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670543476/assets/ClashRoyale_qore84.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/Fortnite_cofsxb.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851650/assets/COD_War_Zone_jjmugo.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/rainbow-six-siege_uatizt.jpg"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
                ></img>
              </div>
              <div class="slide-game">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851650/assets/PUBG-New-State_sjkr0r.webp"
                  className="img-slide-game"
                  onClick={handleOnSelectAGame}
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
