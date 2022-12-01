import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useDispatch} from "react-redux";
//expresión regular

function validate(input) {
  let errors = {};
  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var isValid = expReg.test(input.email);

  if (!input.email) {
    errors.email = "Email requerido";
  } else if (isValid == false) {
    errors.email= "Email no válido";
  }
  return errors;
}

const Newsletter = () => {
  // const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    enablebutton: true,
  });

  const [input, setInput] = useState({
    email: "",
  });

  const thereAreErrors = Object.values(errors).some((error) => error);

  function handleChange(e) {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    }; //creo un nuevo objeto con los valores de input
    setInput(newInput);

    setErrors(validate(newInput));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (thereAreErrors) {
      return;
    }
    // dispatch(input.email);
    // alert("Actividad creada");
    Swal.fire({
      customClass: {
        confirmButton: 'swalBtnColor',
      
      },
      position: "center-center",
      icon: "success",
      iconColor: "#FFC900",
      title: "Su suscripción ha sido exitosa",
      showConfirmButton: true,
      timer: 2000,
    });
    setInput({
      email: "",
    });
  }

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
        
        <form className="input-mail" onSubmit={(e) => handleSubmit(e)}>
      
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            // pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            placeholder="Ingresa tu email"
            className="input-style"
            required
          />
           {errors.email && ( //si existe un error en el mail, entonces renderizame un p que diga el error
          <p className="errors">{errors.email}</p>
        )}
          
          <button
            className="btn-suscription"
            type="submit"
            disabled={thereAreErrors}
          >
            {" "}
            Suscribirme
          </button>
         
        
        </form>
        
      </div>
    </div>
  );
};

export {Newsletter};
