import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.scss"; // ESTILOS
import Footer from "./components/footer/footer";
import Newsletter from "./components/newsletter/newsletter";
import CrearTorneo from "./components/crearTorneo/crearTorneo";

function App() {
  return (
    <div className="App">
      <Newsletter />
      <Footer />
   </div>
  );
}

export default App;
