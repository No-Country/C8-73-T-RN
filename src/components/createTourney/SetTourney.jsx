import { LoginContext } from "../../context/login/LoginContext"; //CONTEXTO
import { useContext } from "react"; // HOOK


const SetTourney = () => {

  const { updateOnSetTourney } = useContext(LoginContext); // AYUDANTES

  

  const handleOnFinish = () => {
    updateOnSetTourney(false)
    
  }; // EVENTO
  

  return (
    <div className="set-background-total">
    <div className="set-background">
      <div className="background-set">
      
        <p className="set-modal">¡Listo!</p>
               
       
      </div>
      
      <img src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1670473142/assets/Trofeo_vndieb.svg" className="trofeo"></img>
        <p className="torneo-creado"> Tu torneo ha sido creado</p>
        <button  onClick={handleOnFinish} className="btn-set">Finalizar</button>
    </div>
    </div>
  );
};

export { SetTourney };
