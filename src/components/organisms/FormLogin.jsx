import "../../assets/style/Login.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const endPoint = "http://localhost:3010/user/login";

  const Form = useRef();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const isValidLogin = async (correo, password) => {
    try {
      const response = await fetch(endPoint, {
        ...options,
        body: JSON.stringify({ correo, password })
      });
      if (!response.ok) {
        throw new Error("Credenciales incorrectas. Inténtalo de nuevo.");
      }
      return await response.json();
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      throw error;
    }
  };

  const handlerClick = async () => {
    const newForm = new FormData(Form.current);
    const correo = newForm.get("correo");
    const password = newForm.get("password");

    try {
      const data = await isValidLogin(correo, password);

      if (data.status === "OK") {
        Swal.fire({
          text: `Bienvenido`,
          icon: "success",
        });
        navigate("/Graficas");
      } else {
        Swal.fire({
          title: "Oops...",
          text: `Credenciales incorrectas. Inténtalo de nuevo.`,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar la solicitud. Inténtalo de nuevo más tarde.",
        icon: "error",
      });
    }
  };

  return (
    <body className="BodyLogin">
      <div className="PadreLogin">
        <form className={"FormLogin"} action="" ref={Form}>
          <Label className={"TituloFormLogin"} msn={"Bienvenido"}></Label>
          <img className={"Loginlinea"} src={Img.LoginLinea} />
          <Label className={"Correo"} msn={"Correo Electrónico"}></Label>
          <Input
            className={"Inputemailandpassword"}
            placeholder={"    Email"}
            name={"correo"}
            type={"text"}
          ></Input>
          <Label className={"Contraseña"} msn={"Contraseña"}></Label>
          <Input
            className={"Inputemailandpassword"}
            placeholder={"    Password"}
            name={"password"}
            type={"password"}
          ></Input>
          <Button
            linkclassName={"ButtonLoginText"}
            className={"ButtonLogin"}
            onclickfuntion={handlerClick}
            msn={"Iniciar Sesión"}
          ></Button>
          <Title
            className={"LoginParteBaja"}
            msn={"Aun no tienes cuenta"}
          ></Title>
          <Button
            linkclassName={"ButtonLoginAbajo"}
            className={"ButtonLoginParteBaja"}
            onclick={"/Register"}
            msn={"Registrate"}
          ></Button>
          <Title
            className={"LoginParteBaja"}
            msn={"¿Has olvidado tu contraseña?"}
          ></Title>
          <Button
            linkclassName={"ButtonLoginAbajo"}
            className={"ButtonLoginParteBaja"}
            onclick={"/"}
            msn={"Has click aquí"}
          ></Button>
        </form>
      </div>
    </body>
  );
}

export default FormLogin;








/*import "../../assets/style/Login.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import React, { useRef } from 'react';
import swal from 'sweetalert2';
import { Navigate, useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const endPoint = "http://localhost:3010/user/login";

  const Form = useRef();
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  };

  function isValidLogin(users, correo, password) {
    let user = null;
    let flag = false;
    for (let i = 0; i < users.length && !flag; i++) {
      if (users[i].correo === correo && users[i].password === password) {
        user = users[i];
        flag = true;
      }
    }
    return user;
  }
  const handlerClick = () => {
    const newForm = new FormData(Form.current);

    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
        let correo = newForm.get("correo");
        let password = newForm.get("password");
        let user = isValidLogin(data, correo, password);
        console.log(JSON.stringify(user));
        // ... (tu lógica para obtener el usuario y validar las credenciales)

        if (user != null) {
          if (newForm.get("correo") === "wenson1980") {
            swal.fire({
              text: `Bienvenido`,
              icon: "success",
            });
          } else {
            swal.fire({
              text: `Bienvenido`,
              icon: "success",
            });
            navigate("/Graficas");
          }
        } else {
          swal.fire({
            title: "Oops...",
            text: `Credenciales incorrectas. Inténtalo de nuevo.`,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores, muestra un mensaje de error al usuario si falla la solicitud
        swal.fire({
          title: "Error",
          text: "Hubo un problema al procesar la solicitud. Inténtalo de nuevo más tarde.",
          icon: "error",
        });
      });
  };
  return (
    <>
      <body className="BodyLogin">
        <div className="PadreLogin">
          <form className={"FormLogin"} action="" ref={Form}>
            <Label className={"TituloFormLogin"} msn={"Bienvenido"}></Label>
            <img className={"Loginlinea"} src={Img.LoginLinea} />
            <Label className={"Correo"} msn={"Correo Electrónico"}></Label>
            <Input
              className={"Inputemailandpassword"}
              placeholder={"    Email"}
              name={"correo"}
              type={"text"}
            ></Input>
            <Label className={"Contraseña"} msn={"Contraseña"}></Label>
            <Input
              className={"Inputemailandpassword"}
              placeholder={"    Password"}
              name={"password"}
              type={"password"}
            ></Input>
            <Button
              linkclassName={"ButtonLoginText"}
              className={"ButtonLogin"}
              onclickfuntion={handlerClick}
              msn={"Iniciar Sesión"}
            ></Button>
            <Title
              className={"LoginParteBaja"}
              msn={"Aun no tienes cuenta"}
            ></Title>
            <Button
              linkclassName={"ButtonLoginAbajo"}
              className={"ButtonLoginParteBaja"}
              onclick={"/Register"}
              msn={"Registrate"}
            ></Button>
            <Title
              className={"LoginParteBaja"}
              msn={"¿Has olvidado tu contraseña?"}
            ></Title>
            <Button
              linkclassName={"ButtonLoginAbajo"}
              className={"ButtonLoginParteBaja"}
              onclick={"/"}
              msn={"Has click aquí"}
            ></Button>
          </form>
        </div>
      </body>
    </>
  );
}

export default FormLogin;*/
