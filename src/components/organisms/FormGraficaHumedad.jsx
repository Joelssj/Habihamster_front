import React, { PureComponent } from "react";
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

const data = [
  {
    name: "02:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "04:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "06:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "08:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "10:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12:00",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "14:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "16:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "18:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "20:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "22:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

function FormGraficasHumedad() {
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
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#0093FE"
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

export default FormGraficasHumedad;
