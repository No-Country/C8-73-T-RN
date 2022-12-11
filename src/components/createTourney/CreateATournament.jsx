import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK

const CreateATournament = () => {
  const { updateOnCreateATournament, updateOnSelectGame } =
    useContext(LoginContext); // AYUDANTES

  const handleOnNewTourney = () => {
    updateOnCreateATournament(false);
    updateOnSelectGame(true);
  }; // EVENTO

  return (
    <div className="tournament-background">
      <div className="background-name-modal">
        <div className="name-modal">
          <img
            src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527282/assets/Icono_Control_de_Juego_kg0bej.svg"
            className="icono-control-de-juego"
          ></img>
          <p className="title-modal">Crea un torneo</p>
        </div>
        <button onClick={handleOnNewTourney} className="btn-creatorneo">
          Crea un nuevo torneo
        </button>
        <p className="duplica"> O duplica alguno de tus torneos anteriores</p>
        <p className="listado-10">
          Solo los últimos 10 torneos aparecen listados
        </p>
        <div id="carrusel" className="frame-carousel">
          <div id="carrusel" class="slider">
            <div id="carrusel-slides" class="slides">
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
              <div className="slide">
              <img
                  src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669851651/assets/FreeFire_k6apkt.jpg"
                  className="img-slide"
                  onClick={handleOnNewTourney}
                ></img>
                <div className="data-cita">
                  <p>08 DIC 2022</p>
                  <p>09:00 am - 3GTM</p>
                </div>
                <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670540399/Free_fire-removebg-preview_bbfdcs.png" className="nombre-juego"></img>
                <div className="data-torneo">
                <div className="data-row-1">
                  <p className="data-estadio">Estadium eSports</p>
                  <p className="data-estadio">Abierto</p>
                  </div>
                  <p className="data-arena">GL ARENA PUGB SOLO IV</p>
                </div>
              </div>
            </div>
            {/* <button class="btn-prev" />
          <button class="btn-next" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateATournament };
