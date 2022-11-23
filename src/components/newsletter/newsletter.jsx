import React from "react";

const Newsletter = () => {
  return (
    <div className="container-news">
      <div className="img-participa">
      
        <div className="div-text">
          <div className="text-participa">
            <p>Participa en torneos y compite</p> 
            <p>con los mejores jugadores del</p> 
            <p>mundo</p>
            </div>
        </div>
      </div>

      <div className="div-parte">
        <p className="title-parte">Juega en cualquier parte del mundo</p>

        <p className="text-parte">
          Todo jugador sea cual sea su nivel, puede sentir el espiritu de los
          esports y tener posibilidades de ganar.
          <br />
          <br />
          ¡Simplemente encuentra tu propia forma de vencer a tus oponentes!{" "}
        </p>
      </div>

      <div className="suscription">
        <div>
          <p className="title-suscription">
            Para que estés siempre actualizado
          </p>
          <p className="text-suscription">
            Subscribite a nuestra newsletter para todas las actualizaciones y
            noticias de nuestros torneos
            <br />
            <br />
            ¡Te prometemos que no será spam!
          </p>
        </div>
        <div className="input-mail">
          <input
            type="text"
            name="mail"
            placeholder="Ingresa tu email"
            className="input-style"
          />
          <button className="btn-suscription">Suscribirme</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
