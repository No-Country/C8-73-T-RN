import { useNavigate } from 'react-router-dom'; // HOOKS ROUTER DOM

const RegisterForm = () => {
    const navigate = useNavigate(); // NAVEGACION

    const handleNavigate = () => navigate('/'); // EVENTO

    return (
        <form className="form">
            {/* NOMBRE */}
            <label className="form-label" htmlFor="firstName">
                Nombre
            </label>
            <input
                className="form-input"
                id="firstName"
                name="firstName"
                type="text"
                required={true}
                placeholder="Ingresa tu nombre"
            />
            {/* APELLIDO */}
            <label className="form-label" htmlFor="lastName">
                Apellido
            </label>
            <input
                className="form-input"
                id="lastName"
                name="lastName"
                type="text"
                required={true}
                placeholder="Escribe tu apellido"
            />
            {/* EMAIL */}
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-input"
                id="email"
                name="email"
                type="email"
                required={true}
                placeholder="Escribe tu email"
            />
            {/* CONTRASEÑA */}
            <label className="form-label" htmlFor="password">
                Crea tu contraseña
            </label>
            <input
                className="form-input"
                id="password"
                name="password"
                type="password"
                required={true}
                placeholder="Escribe tu contraseña"
            />
            {/* CONTRASEÑA A CONFIRMAR */}
            <label className="form-label" htmlFor="passwordConfirm">
                Confirma tu contraseña
            </label>
            <input
                className="form-input"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required={true}
                placeholder="Confirma tu contraseña"
            />
            {/* TERMINOS Y CONDICIONES */}
            <label className="form-terms-label" htmlFor="checkbox">
                <input className="form-terms-checkbox" type="checkbox" name="checkbox" id="checkbox" />
                Acepto términos y condiciones.
            </label>
            {/* BOTONES CANCELAR Y REGISTRAR */}
            <div className="form-group">
                <button onClick={handleNavigate} type="button" className="form-group-btn form-group-btn-cancel">
                    Cancelar
                </button>
                <button type="sumbit" className="form-group-btn form-group-btn-register">
                    Registrate
                </button>
            </div>
        </form>
    );
};

export { RegisterForm };
