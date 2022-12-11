import React, { useState } from "react";
import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK

function validate(input) {
  let errors = {};
  
//   ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$

// en este caso, (?=.*\d) verifica la existencia de un caracter numerico, (?=.*[a-z]) la de una letra minuscula y (?=.*[A-Z]) la de una letra en mayusculas. Por ultimo la longitud la verificamos con los valores entre llaves {6,15}.

  if (!input.name) {
    errors.name = "Nombre completo requerido";
  } else if (!input.usuario) {
    errors.usuario = "Usuario requerido";
  } else if (!input.contraseña) {
    errors.contraseña = "Contraseña requerida";
  } else if (!input.discord) {
    errors.discord = "Discord Tag requerido";
  }
  return errors;
}

const TourneyData = () => {
  const { updateOnTourneyData, updateOnSetTourney } = useContext(LoginContext); // AYUDANTES

  const [errors, setErrors] = useState({
    enablebutton: true,
  });

  const [input, setInput] = useState({
    name: "",
    usuario: "",
    contraseña: "",
    discord: "",
  });

  const thereAreErrors = Object.values(errors).some((error) => error);

  function handleChangeForm(e) {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    }; //creo un nuevo objeto con los valores de input
    setInput(newInput);

    setErrors(validate(newInput));
  }

  const handleOnSubmitData = () => {
    updateOnTourneyData(false);
    updateOnSetTourney(true);
  }; // EVENTO


  const handleReturnPageTorneo = () =>{
    updateOnTourneyData(false);
  }

  return (
    <div className="form-data-background">
    <div className="tournament-form-data">
      <div className="background-name-modal-form">
        <div className="name-modal">
          <i class="fi fi-rr-gamepad"></i>
          <p className="title-modal">Crea un torneo</p>
        </div>
        <form className="form-data" onSubmit={() => handleOnSubmitData()}>
          <div className="first-row">
            {/* NAME */}
            <div className="row-data">
              <label className="name-input">Nombre completo</label>
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder="Escribe tu nombre completo"
                className="input-data"
                onChange={(e) => handleChangeForm(e)}
                required
              />
               {errors.name && ( //si existe un error en el mail, entonces renderizame un p que diga el error
          <p className="errors-data">{errors.name}</p>
        )}
            </div>
            {/* USUARIO FREE FIRE */}
            <div className="row-data">
              <label className="name-input">Usuario en FREE FIRE</label>
              <input
                type="text"
                name="usuario"
                value={input.usuario}
                placeholder="Escribe tu nombre de usuario"
                className="input-data"
                onChange={(e) => handleChangeForm(e)}
                required
              />
               {errors.usuario && ( //si existe un error en el mail, entonces renderizame un p que diga el error
          <p className="errors-data">{errors.usuario}</p>
        )}
            </div>
          </div>
          {/* CONTRASEÑA */}

          <div className="second-row">
            <div className="row-data">
              <label className="name-input">Contraseña</label>
              <input
                type="text"
                name="contraseña"
                value={input.contraseña}
                placeholder="Escribe tu contraseña"
                className="input-data"
                onChange={(e) => handleChangeForm(e)}
                required
              />
               {errors.contraseña && ( //si existe un error en el mail, entonces renderizame un p que diga el error
          <p className="errors-data">{errors.contraseña}</p>
        )}
            </div>
            {/* DISCORD TAG   */}
            <div className="row-data">
              <label className="name-input">Discord Tag</label>
              <input
                type="text"
                name="discord"
                value={input.discord}
                placeholder="Escribe tu Tag de Discord"
                className="input-data"
                onChange={(e) => handleChangeForm(e)}
                required
              />
               {errors.discord && ( //si existe un error en el mail, entonces renderizame un p que diga el error
          <p className="errors-data">{errors.discord}</p>
        )}
            </div>
          </div>
          <div className="btn-form-data">
          
            <button onClick={handleReturnPageTorneo} className="btn-data-cancelar">Cancelar</button>
            
            <button
              disabled={thereAreErrors}
              type="submit"
              // onClick={handleOnSubmitData}
              className="btn-data-unirse"
            >
            {" "}
              Únete al torneo
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export { TourneyData };
