import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK


const SetTourney = () => {

//   const { updateOnCreateATournament, updateOnSelectGame } = useContext(LoginContext); // AYUDANTES

  

//   const handleOnNewTourney = () => {
//     updateOnCreateATournament(false)
//     updateOnSelectGame(true)
//   }; // EVENTO
  

  return (
    <div className="set-background">
      <div className="background-set">
      
        <p className="set-modal">¡Listo!</p>
               
       
      </div>
      
      <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670473142/assets/Trofeo_vndieb.svg" className="trofeo"></img>
        <p className="torneo-creado"> Tu torneo ha sido creado</p>
        <button  className="btn-set">Finalizar</button>
    </div>
  );
};

export { SetTourney };
