import { Link } from "react-router-dom";
import WrapperLabel from "../molecules/WraperLabel";
import "../../assets/style/navbarGraficas.css";
import Title from "../atoms/Title";
import Img from "../../assets/js/img";
import React, { useState, useEffect } from "react";

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

function NavbarEstadisticasMedia() {
  const [data, setData] = useState([]); //! Probabilidades
  const [mediaData, setMediaData] = useState([]); //! Media datos

  useEffect(() => {
    fetch("http://localhost:3010/sensores")
      .then((response) => response.json())
      .then((result) => {
        setData({
          data: result.data,
          temperaturaMayor24: result.temperaturaMayor24,
          humedadMayor60: result.humedadMayor60,
          luzMayor20: result.luzMayor20,
        });
        setMediaData({
          mediaTemperatura: result.mediaTemperatura,
          mediaHumedad: result.mediaHumedad,
          mediaLuz: result.mediaLuz,
        });
        console.log(result);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <header className="headergraficas">
      <nav>
        <ul>
          <li>
            <div className="divRellenado" onClick={redirigirTemperatura}>
              <img className={"Temperatura"} src={Img.TemperaturaImagen} />
              <Title msn={"Temperatura"} className={"TemperaturaText3"}></Title>
              <img className={"Linea2"} src={Img.LineaParaCuadros} />
              {mediaData && mediaData.mediaTemperatura !== undefined ? (
                <Title msn={mediaData.mediaTemperatura.toFixed(2)} className={"TemperaturaText2"}></Title>
              ) : (
                <p></p>
              )}
            </div>
          </li>
          <li>
            <div className="divRellenado" onClick={redirigirHumedad}>
              <img className={"Humedad"} src={Img.HumedadImagen} />
              <Title msn={"Humedad"} className={"HumedadText3"}></Title>
              <img className={"Linea3"} src={Img.LineaParaCuadros} />
              {mediaData && mediaData.mediaHumedad !== undefined ? (
                <Title msn={mediaData.mediaHumedad.toFixed(2)} className={"HumedadText2"}></Title>
              ) : (
                <p></p>
              )}
            </div>
          </li>
          <li>
            <div className="divRellenado" onClick={redirigirLuminosidad}>
              <img
                className={"LuminosidadProbabilidad"}
                src={Img.LuminosidadImagen}
              />
              <Title msn={"Luminosidad"} className={"LuminosidadPText"}></Title>
              <img className={"Linea5"} src={Img.LineaParaCuadros} />
              {mediaData && mediaData.mediaLuz !== undefined ? (
                <Title msn={mediaData.mediaLuz.toFixed(2)} className={"LuminosidadPText2"}></Title>
              ) : (
                <p></p>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarEstadisticasMedia;
