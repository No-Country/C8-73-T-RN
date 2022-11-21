
import "./styles/App.scss"; // ESTILOS
import PortadaHero from "./components/hero/PortadaHero";
import Categories from "./components/categories/Categories";

function App() {

    return (
        <div className="App">
            <PortadaHero />
            <Categories />
        </div>
    );
}

export default App;
