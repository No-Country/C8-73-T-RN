import "./styles/App.scss"; // ESTILOS
import Footer from "./components/footer/footer";
import Newsletter from "./components/newsletter/newsletter";

function App() {
  return (
    <div className="App">
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
