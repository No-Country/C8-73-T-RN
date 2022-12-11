const LoginAlert = ({ onClick }) => {
    return (
        <div className="alert-login">
            <div className="alert-login-icons">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none">
                    <line x1="32.06" y1="17.55" x2="32.06" y2="16.88" strokeLinecap="round" />
                    <line x1="32.06" y1="45.3" x2="32.06" y2="24.87" strokeLinecap="round" />
                    <circle cx="32" cy="32" r="24.25" strokeLinecap="round" />
                </svg>
                <svg
                    onClick={onClick}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none">
                    <line x1="32.06" y1="17.55" x2="32.06" y2="16.88" strokeLinecap="round" />
                    <line x1="32.06" y1="45.3" x2="32.06" y2="24.87" strokeLinecap="round" />
                    <circle cx="32" cy="32" r="24.25" strokeLinecap="round" />
                </svg>
            </div>
            <h6 className="alert-login-title">
                Debes iniciar sesión o crear una cuenta para poder crear o unirte a un torneo.
            </h6>
        </div>
    );
};

export { LoginAlert };
