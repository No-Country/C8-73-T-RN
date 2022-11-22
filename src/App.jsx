import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar/Navbar";
import "./styles/App.scss"; // ESTILOS

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Navbar/>
        </div>
    );
}

export default App;
