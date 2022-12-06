import { Link } from 'react-router-dom'; // COMPONENTE ROUTER DOM
import { useState } from 'react'; // HOOKS

const LoginForm = () => {
    const [loginData, updateLoginData] = useState({
        email: '',
        password: '',
    }); // ESTADO

    const handleOnChange = (ev) => {
        updateLoginData((prevLoginData) => ({
            ...prevLoginData,
            [ev.target.name]: ev.target.value,
        }));
    }; // EVENTO

    return (
        <form className="form">
            {/* EMAIL */}
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="email"
                name="email"
                type="gmail"
                required={true}
                placeholder="Ingresa tu usuario"
                value={loginData.email}
            />
            {/* CONTRASEÑA */}
            <label className="form-label" htmlFor="password">
                Contraseña
            </label>
            <input
                onChange={handleOnChange}
                className="form-input"
                id="password"
                name="password"
                type="password"
                required={true}
                placeholder="Escribe tu contraseña"
                value={loginData.password}
            />
            {/* OLVIDO DE CONTRASEÑA */}
            <h3 className="form-h3">¿Olvidaste tu contraseña?</h3>
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

export { LoginForm };
