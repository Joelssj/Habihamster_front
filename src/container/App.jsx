import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingP1 from "../pages/LandingInicio";
import LandingP2 from "../pages/LandingNosotros";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecuperarContraseña from "../pages/RecuperarContraseña";
import Graficas from "../pages/Graficas";
import FormGraficasTemperatura from "../components/organisms/FormGraficasTemperatura";
import FormGraficasHumedad from "../components/organisms/FormGraficaHumedad";
import FormGraficasLuminosidad from "../components/organisms/FormGraficasLuminosidad";
import FormEstadisticas from "../components/organisms/FormEstadisticas";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingP1 />}/>
                <Route path="/SobreNosotros" element={<LandingP2 />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Register" element={<Register />}/>
                <Route path="/RecuperarContraseña" element={<RecuperarContraseña />}/>
                <Route path="/Graficas" element={<Graficas />}/>
                <Route path="/GraficaTemperatura" element={<FormGraficasTemperatura />}/>
                <Route path="/GraficaHumedad" element={<FormGraficasHumedad />}/>
                <Route path="/GraficaLuminosidad" element={<FormGraficasLuminosidad />}/>
                <Route path="/Estadisticas" element={<FormEstadisticas />}/>
                <Route path="/" element={<LandingP1 />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;