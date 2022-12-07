const TourneyData = () => {
  return (
    <div className="tournament-form-data">
      <div className="background-name-modal-form">
        <div className="name-modal">
          <i class="fi fi-rr-gamepad"></i>
          <p className="title-modal">Crea un torneo</p>
        </div>
        <form className="form-data">
          <div className="first-row">
            {/* NAME */}
            <div className="row-data">
              <label className="name-input">Nombre completo</label>
              <input
                type="text"
                placeholder="Escribe tu nombre completo"
                className="input-data"
                required
              />
            </div>
            {/* USUARIO FREE FIRE */}
            <div className="row-data">
              <label className="name-input">Usuario en FREE FIRE</label>
              <input
                type="text"
                placeholder="Escribe tu nombre de usuario"
                className="input-data"
                required
              />
            </div>
          </div>
          {/* CONTRASEÑA */}

          <div className="second-row">
            <div className="row-data">
              <label className="name-input">Contaseña</label>
              <input
                type="text"
                placeholder="Escribe tu contraseña"
                className="input-data"
                required
              />
            </div>
            {/* DISCORD TAG   */}
            <div className="row-data">
              <label className="name-input">Discord Tag</label>
              <input
                type="text"
                placeholder="Escribe tu Tag de Discord"
                className="input-data"
                required
              />
            </div>
          </div>
          <div className="btn-form-data">
            <button className="btn-data-cancelar">Cancelar</button>
            <button className="btn-data-unirse">Únete al torneo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { TourneyData };
