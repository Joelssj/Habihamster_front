import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../../assets/style/Graficas.css";
import Title from "../atoms/Title";
import Img from "../../assets/js/img";
import NavbarGraficas from "./NavbarGraficas";

function redirigir1() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "Graficas";
}

function redirigir2() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "Estadisticas";
}

function redirigir3() {
  // Puedes cambiar la URL a la que quieras redirigir
  window.location.href = "/";
}

function FormGraficasLuminosidad() {

  //-----------------------------------------------------------------------------
  //!Inicia proceso de impresion

  const [chartData, setChartData] = useState([]); //!Estado que es un arreglo donde se guarda lo que viene de la API

  //?Aca es el effect que hace la peticion a la API
  useEffect(() => {
    fetch("http://localhost:3010/sensores")
      .then((response) => response.json())
      .then((data) => {
        // Obtener todas las temperaturas del array "data"
        const luminosos = data.data.map((item) => ({
          name: item.hora,
          pv: item.luz,
        }));

        // Ordenar los datos por la hora en orden ascendente
        luminosos.sort((a, b) => {
          // Parsear las horas y compararlas
          const timeA = new Date(`2000-01-01T${a.name}`);
          const timeB = new Date(`2000-01-01T${b.name}`);
          return timeA - timeB;
        });

        // Actualizar el estado con las nuevas temperaturas ordenadas
        setChartData(luminosos);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);
  //-------------------------------------------------------------

  return (
    <>
      <div className="padre">
        <div className="divizquierdo">
          <Title msn={"Panel de control"} className={"TituloPanel"}></Title>
          <img className={"GraficaLinea"} src={Img.LineaGrafica} />

          <button onClick={redirigir1} class="button-graficas">
            <img src="src/assets/img/Performance Macbook.png" alt=""></img>
            Gráficas
          </button>
          <button onClick={redirigir2} class="button-estadisticas">
            <img src="src/assets/img/estadisticas.png" alt=""></img>
            Estadísticas
          </button>
          <button onClick={redirigir3} class="button-logout">
            <img src="src/assets/img/Sign Out.png" alt=""></img>
            Cerrar Sesión
          </button>
        </div>
        <div className="divderecho">
          <div className="NadvarG">
            <NavbarGraficas></NavbarGraficas>
          </div>
          <div className="Grafica1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#FFEE00"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormGraficasLuminosidad;
