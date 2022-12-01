import { LoginContext } from '../../context/login/LoginContext'; // CONTEXTO
import { useContext } from 'react'; // HOOK

const LoginWithOption = () => {
    const { updateOnLoginWithOption } = useContext(LoginContext); // AYUDANTES

    const handleOnLogin = (ev) => {
        if (ev.target === ev.currentTarget) return updateOnLoginWithOption(false);
    }; // EVENTO

    return (
        <div onClick={handleOnLogin} className="login-with-option-background">
            <section className="login-with-option">
                {/* INFORMACION */}
                <h2 className="login-with-option-h2">e/stadium</h2>
                <h3 className="login-with-option-h3">Bienvenido a e/stadium</h3>
                <span className="login-with-option-span">Elige como deseas continuar configurando su cuenta</span>
                {/* BOTONES DE INICIO */}
                <button className="login-with-option-btn login-with-option-btn-apple">Continua con Apple</button>
                <button className="login-with-option-btn login-with-option-btn-facebook">Continua con Facebook</button>
                <button className="login-with-option-btn login-with-option-btn-google">Continua con Google</button>
                <button className="login-with-option-btn login-with-option-btn-correo">Continua con tu correo</button>
                <button className="login-with-option-btn login-with-option-btn-guest">Continua como invitado</button>
                {/* DESCRIPCION */}
                <p className="login-with-option-p">
                    Al hacer clic en el botón, acepta los{' '}
                    <a href="#tyc" className="login-with-option-a">
                        Términos de Uso
                    </a>{' '}
                    y la{' '}
                    <a href="#politica" className="login-with-option-a">
                        Política de Privacidad
                    </a>{' '}
                    y tambien confirma que tiene 18 años o más.
                </p>
            </section>
        </div>
    );
};

export { LoginWithOption };
