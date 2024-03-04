import { Link } from "react-router-dom";
import WrapperLabel from "../molecules/WraperLabel";
import "../../assets/style/navbarGraficas.css";
import Title from "../atoms/Title";
import Img from "../../assets/js/img";

function redirigirRellenado() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "Graficas";
}

function redirigirTemperatura() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "GraficaTemperatura";
}

function redirigirHumedad() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "GraficaHumedad";
}

function redirigirLuminosidad() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "GraficaLuminosidad";
}

function NavbarGraficas() {
  return (
    <header className="headergraficas">
      <nav>
        <ul>
          <li>
            <div className="divRellenado" onClick={redirigirRellenado}>
              <img className={"Comida"} src={Img.ComidaImagen} />
              <Title msn={"Rellenado"} className={"ComidaText"}></Title>
              <img className={"Linea1"} src={Img.LineaParaCuadros} />
            </div>
          </li>
          <li>
            <div className="divRellenado" onClick={redirigirTemperatura}>
              <img className={"Temperatura"} src={Img.TemperaturaImagen} />
              <Title msn={"Temperatura"} className={"TemperaturaText"}></Title>
              <img className={"Linea2"} src={Img.LineaParaCuadros} />
            </div>
          </li>
          <li>
            <div className="divRellenado" onClick={redirigirHumedad}>
              <img className={"Humedad"} src={Img.HumedadImagen} />
              <Title msn={"Humedad"} className={"HumedadText"}></Title>
              <img className={"Linea3"} src={Img.LineaParaCuadros} />
            </div>
          </li>
          <li>
            <div className="divRellenado" onClick={redirigirLuminosidad}>
              <img className={"Luminosidad"} src={Img.LuminosidadImagen} />
              <Title msn={"Luminosidad"} className={"LuminosidadText"}></Title>
              <img className={"Linea4"} src={Img.LineaParaCuadros} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarGraficas;
