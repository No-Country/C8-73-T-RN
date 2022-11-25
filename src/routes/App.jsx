import "../styles/App.scss"; // ESTILOS DE LA APP
import { BrowserRouter, Route, Routes } from "react-router-dom"; // COMPONENTES ROUTER DOM
import { Error } from "../pages/error/Error"; // COMPONENTE
import { Inicio } from "../pages/inicio/Inicio"; // COMPONENTE
import { Juegos } from "../pages/juegos/Juegos"; // COMPONENTE
import { Torneos } from "../pages/torneos/Torneos"; // COMPONENTE

const App = () => {
    return (
        <>
            <header>navbar</header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/juegos" element={<Juegos />} />
                    <Route path="/torneos" element={<Torneos />} />
                </Routes>
            </BrowserRouter>
            <footer>footer</footer>
        </>
    );
};

export { App };
