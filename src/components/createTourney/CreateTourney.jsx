import { TourneyContext } from "../../context/tourney/TourneyContext"; //CONTEXTO
import { useContext } from "react"; // HOOK
// import { BsTrophy } from "react-icons/bs";
// import { AiOutlineUserAdd } from "react-icons/ai";

const CreateTourney = () => {
  const { updateOnCreateTourney } = useContext(TourneyContext); // AYUDANTES

  const handleOnTourney = (ev) => {
    if (ev.target === ev.currentTarget) return updateOnCreateTourney(false);
  }; // EVENTO

  return (
    <div onClick={handleOnTourney} className="tourney-background">
      <div className="grid-container">
        <div className="tourney-grid">
          <section className="grid-sup-izq">
            <i class="fi fi-rr-trophy"></i>
            {/* <BsTrophy style={{ color: "white", fontSize:"24px" }} /> */}
            <p className="title-grid">Crear Torneo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>

          <section className="grid-sup-der">
            <i class="fi fi-rr-user-add"></i>
            {/* <AiOutlineUserAdd style={{ color: "white", fontSize: "24px" }} /> */}
            <p className="title-grid">Crear Equipo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>

          <section className="grid-center-izq">
            <img
              className="img-arena"
              src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669941601/assets/icons8-arena-50_u1m1zn.png"
            ></img>
            <p className="title-grid">Crear Arena</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>

          <section className="grid-center-der">
            <i class="fi fi-rr-users"></i>
            <p className="title-grid">Crear Grupo</p>
            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>

          <section className="grid-inf-izq">
            <i class="fi fi-rr-edit"></i>
            <p className="title-grid">Crear Post</p>

            <p className="text-grid">
              Crea torneos para tus amigos o comunidad
            </p>
          </section>

          <section className="grid-inf-der">
            <i class="fi fi-rr-time-past"></i>
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
