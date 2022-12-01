const LoginForm = () => {
    return (
        <form className="form">
            {/* EMAIL */}
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-input"
                id="email"
                name="email"
                type="gmail"
                required={true}
                placeholder="Ingresa tu usuario"
            />
            {/* CONTRASEÑA */}
            <label className="form-label" htmlFor="password">
                Contraseña
            </label>
            <input
                className="form-input"
                id="password"
                name="password"
                type="password"
                required={true}
                placeholder="Escribe tu contraseña"
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
                <button className="form-group-btn form-group-btn-cancel">Cancelar</button>
                <button type="sumbit" className="form-group-btn form-group-btn-register">
                    Registrate
                </button>
            </div>
        </form>
    );
};

export { LoginForm };
