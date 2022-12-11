import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK


const CreateTourney = () => {
  const { updateOnCreateATournament, updateOnCreateTourney } = useContext(LoginContext); // AYUDANTES

  

  const handleOnCreateATournament = () => {
    updateOnCreateTourney(false)
    updateOnCreateATournament(true)
  }; // EVENTO
  
//   const handleOnLogin = (ev) => {
//     if (ev.target === ev.currentTarget) return updateOnLoginWithOption(false);
// }; // EVENTO

  // const handleOnATournament = (ev) => {
  //   if (ev.target === ev.currentTarget) return updateCreateATournament(false);
  // }; // EVENTO

  return (
    <div  className="tourney-background">
      <div className="grid-container">
        <div className="tourney-grid">
          {/* CREAR TORNEO */}
        
          <section onClick={handleOnCreateATournament} className="grid-sup-izq">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670473142/assets/Trofeo_vndieb.svg" className="img-crear-equipo"></img>
            {/* <i className="fi fi-rr-trophy"></i> */}
            <p className="title-grid">Crear Torneo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
          
          {/* CREAR EQUIPO */}
          <section className="grid-sup-der">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670526775/assets/Crear_equipo_2_enhqmp.svg" className="img-crear-equipo"></img>
            {/* <i className="fi fi-rr-user-add"></i> */}
            <p className="title-grid">Crear Equipo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
          {/* CREAR ARENA */}
          <section className="grid-center-izq">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669941601/assets/icons8-arena-50_u1m1zn.png" className="img-crear-arena"></img>
            <p className="title-grid">Crear Arena</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
          {/* CREAR GRUPO */}
          <section className="grid-center-der">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527283/assets/Personas_krv4cl.svg" className="img-crear-equipo"></img>
            {/* <i className="fi fi-rr-users"></i> */}
            <p className="title-grid">Crear Grupo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
          {/* CREAR POST */}
          <section className="grid-inf-izq">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527286/assets/Crear_post_zoweyo.svg" className="img-crear-equipo"></img>
            {/* <i className="fi fi-rr-edit"></i> */}
            <p className="title-grid">Crear Post</p>

            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
          {/* CREAR HISTORIA */}
          <section className="grid-inf-der">
          <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670527285/assets/Crear_historia_sa5lnq.svg" className="img-crear-equipo"></img>
            {/* <i className="fi fi-rr-time-past"></i> */}
            <p className="title-grid">Crear Historia</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export { CreateTourney };
