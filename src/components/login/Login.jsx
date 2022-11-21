const Login = () => {
    return (
        <div className="login-background">
            <section className="login">
                {/* BUTTON DE VOLVER */}
                {/* <button className="login-btn-close">X</button> */}
                {/* INFORMACION */}
                <h1 className="login-h1">e/stadium</h1>
                <h2 className="login-h2">Bienvenido a e/stadium</h2>
                <span className="login-span">Elige como deseas continuar configurando su cuenta</span>
                {/* BOTONES DE INICIO */}
                <button className="login-btn login-btn-apple">Continua con Apple</button>
                <button className="login-btn login-btn-facebook">Continua con Facebook</button>
                <button className="login-btn login-btn-google">Continua con Google</button>
                <button className="login-btn login-btn-correo">Continua con tu correo</button>
                <button className="login-btn login-btn-guest">Continua como invitado</button>
                {/* DESCRIPCION */}
                <p className="login-p">
                    Al hacer clic en el botón, acepta los{" "}
                    <a href="#tyc" className="login-a">
                        Términos de Uso
                    </a>{" "}
                    y la{" "}
                    <a href="#politica" className="login-a">
                        Política de Privacidad
                    </a>{" "}
                    y tambien confirma que tiene 18 años o más.
                </p>
            </section>
        </div>
    );
};

export { Login };
