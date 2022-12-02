// import { CarouselTorneos } from "./carousel-torneos";

const CreateATournament = () => {

  // const carSld = document.getElementById("carrusel-slides");
  // const carSlds = document.querySelector("#carrusel-slides .slide");
  // const carRight = document.querySelector(".btn-next");
  // const carLeft = document.querySelector(".btn-prev");
  // let direction;
  
  // carRight.onclick = function () {
  //   carSld.scrollLeft += 220;  
  // };
  
  // carLeft.onclick = function () {
  //   carSld.scrollLeft -= 220;
  // };
  




  return (
    <div className="tournament-background">
      <div className="background-name-modal">
        <div className="name-modal">
          <i class="fi fi-rr-gamepad"></i>
          <p className="title-modal">Crea un torneo</p>
        </div>
        <button className="btn-creatorneo">Crea un nuevo torneo</button>
        <p className="duplica"> O duplica alguno de tus torneos anteriores</p>
        <p className="listado-10">
          Solo los últimos 10 torneos aparecen listados
        </p>
        <div id="carrusel"className="frame-carousel">
        <div id="carrusel" class="slider">
          <div id="carrusel-slides" class="slides">
            <div class="slide">1</div>
            <div class="slide">2</div>
            <div class="slide">3</div>
            <div class="slide">4</div>
            <div class="slide">5</div>
            <div class="slide">6</div>
            <div class="slide">7</div>
            <div class="slide">8</div>
            <div class="slide">9</div>
            <div class="slide">10</div>
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
