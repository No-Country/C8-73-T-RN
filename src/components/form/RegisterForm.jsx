import { Link } from 'react-router-dom'; // COMPONENTE ROUTER DOM
import { useState } from 'react'; // HOOKS

const RegisterForm = () => {
    const [registerData, updateRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        // passwordConfirm: '',
    }); // ESTADO

    const handleOnChange = (ev) => {
        updateRegisterData((prevRegisterData) => ({
            ...prevRegisterData,
            [ev.target.name]: ev.target.value,
        }));
    }; // EVENTO

    return (
        <form className="form">
            {/* NOMBRE */}
            <label className="form-label" htmlFor="firstName">
                Nombre
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="firstName"
                name="firstName"
                type="text"
                required={true}
                placeholder="Ingresa tu nombre"
                value={registerData.firstName}
            />
            {/* APELLIDO */}
            <label className="form-label" htmlFor="lastName">
                Apellido
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="lastName"
                name="lastName"
                type="text"
                required={true}
                placeholder="Escribe tu apellido"
                value={registerData.lastName}
            />
            {/* EMAIL */}
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="email"
                name="email"
                type="email"
                required={true}
                placeholder="Escribe tu email"
                value={registerData.email}
            />
            {/* CONTRASEÑA */}
            <label className="form-label" htmlFor="password">
                Crea tu contraseña
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="password"
                name="password"
                type="password"
                required={true}
                placeholder="Escribe tu contraseña"
                value={registerData.password}
            />
            {/* CONTRASEÑA A CONFIRMAR */}
            {/* <label className="form-label" htmlFor="passwordConfirm">
                Confirma tu contraseña
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required={true}
                placeholder="Confirma tu contraseña"
                value={registerData.passwordConfirm}
            /> */}
            {/* TERMINOS Y CONDICIONES */}
            <label className="form-terms-label" htmlFor="checkbox">
                <input className="form-terms-checkbox" type="checkbox" name="checkbox" id="checkbox" />
                Acepto términos y condiciones.
            </label>
            {/* BOTONES CANCELAR Y REGISTRAR */}
            <div className="form-group">
                <Link to="/" className="form-group-btn form-group-btn-cancel">
                    Cancelar
                </Link>
                <button type="sumbit" className="form-group-btn form-group-btn-register">
                    Registrate
                </button>
            </div>
        </form>
    );
};

export { RegisterForm };
