const Error = () => {
    return (
        <main>
            <section className="error">
                <picture className="error-picture">
                    <img
                        src="https://res.cloudinary.com/dvvfhyi8n/image/upload/v1669754864/assets/error404_s5es1j.svg"
                        alt="imagen de error"
                    />
                </picture>
                <h2 className="error-title">Ops... parece que tu juego colapso</h2>
                <p className="error-paragraph">
                    No te preocupes, haz clic <strong>aquí</strong> para buscar otros juegos
                </p>
            </section>
        </main>
    );
};

export { Error };
