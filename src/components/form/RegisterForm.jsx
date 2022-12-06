import { UserContext } from '../../context/user/UserContext'; // CONTEXTO
import { Link, useNavigate } from 'react-router-dom'; // HOOKS ROUTER DOM
import { useState, useContext } from 'react'; // HOOKS

const RegisterForm = () => {
    const [registerData, updateRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }); // ESTADO

    const handleOnChange = (ev) => {
        updateRegisterData((prevRegisterData) => ({
            ...prevRegisterData,
            [ev.target.name]: ev.target.value,
        }));
    }; // EVENTO

    const { updateUser, createUser, updateProfileUser } = useContext(UserContext); // AYUDANTES

    const navigate = useNavigate(); // NAVEGACION

    const handleSubmit = async (ev) => {
        try {
            ev.preventDefault();
            const userCredential = await createUser(registerData.email, registerData.password); // SOLICITUD A FIREBASE AUTH
            await updateProfileUser({
                displayName: `${registerData.firstName} ${registerData.lastName}`,
            }); // SOLICITUD A FIREBASE AUTH
            updateUser(userCredential.user); // ACTUALIZACION DE USUARIO
            navigate('/'); // REDIRECCIONAMIENTO
        } catch (error) {
            console.log(error.code);
        }
    };

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

export { RegisterForm };
