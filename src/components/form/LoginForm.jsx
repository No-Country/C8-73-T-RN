import { UserContext } from '../../context/user/UserContext'; // CONTEXTO
import { Link, useNavigate } from 'react-router-dom'; // HOOKS ROUTER DOM
import { useState, useContext } from 'react'; // HOOKS

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

    const navigate = useNavigate(); // NAVEGACION

    const { updateUser, signInUser } = useContext(UserContext); // AYUDANTES

    const handleSubmit = async (ev) => {
        try {
            ev.preventDefault();
            const userCredential = await signInUser(loginData.email, loginData.password); // SOLICITUD A FIREBASE AUTH
            updateUser(userCredential.user); // ACTUALIZACION DE USUARIO
            navigate('/'); // REDIRECCIONAMIENTO
        } catch (error) {
            console.log(error.code);
        }
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
                <button onClick={handleSubmit} type="sumbit" className="form-group-btn form-group-btn-register">
                    Registrate
                </button>
            </div>
        </form>
    );
};

export { LoginForm };
