import "../../assets/style/Register.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Swal from "sweetalert2";

function FormRegister() {
  const form = useRef();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current);
    const nombre = newForm.get("nombre");
    const correo = newForm.get("correo");
    const password = newForm.get("password");
    const confirmarPassword = newForm.get("confirmarPassword");

    if (nombre === "" || correo === "" || password === "" || confirmarPassword === "") {
      // Mostrar SweetAlert si hay campos vacíos
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      var raw = JSON.stringify({
        nombre: nombre,
        correo: correo,
        password: password,
        confirmarPassword: confirmarPassword,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3010/user/crear", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      Swal.fire({
        title: "¡Felicidades!",
        text: "Registro exitoso.",
        icon: "success",
      });

      navigate("/");
    }
  };

  return (
    <body className="BodyRegister">
      <div className="PadreRegister">
        <form className={"FormRegister"} action="" ref={form}>
          <Label
            className={"TituloFormRegister"}
            msn={"Unete a nuestra familia"}
          ></Label>
          <img className={"Registerlinea"} src={Img.RegisterLinea} />

          <Label className={"NombreRegister"} msn={"Nombre"}></Label>
          <Input
            className={"Inputname"}
            name={"nombre"}
            placeholder={"    Nombre"}
            type={"text"}
          ></Input>

          <Label
            className={"CorreoRegister"}
            msn={"Correo Electrónico"}
          ></Label>
          <Input
            className={"InputemailandpasswordRegister"}
            name={"correo"}
            placeholder={"    Email"}
            type={"text"}
          ></Input>

          <Label className={"ContraseñaRegister"} msn={"Contraseña"}></Label>
          <Input
            className={"InputemailandpasswordRegister"}
            name={"password"}
            placeholder={"    Password"}
            type={"password"}
          ></Input>

          <Label
            className={"ContraseñaRegister"}
            msn={"Confirmación de contraseña"}
          ></Label>
          <Input
            className={"InputemailandpasswordRegister"}
            placeholder={"    Password"}
            name={"confirmarPassword"}
            type={"password"}
          ></Input>

          <Button
            linkclassName={"ButtonLoginText"}
            className={"ButtonRegister"}
            onclickfuntion={clickHandler}
            msn={"Registrarse"}
          ></Button>

          <Title
            className={"LoginParteBaja"}
            msn={"¿Ya cuentas con una cuenta?"}
          ></Title>

          <Button
            linkclassName={"ButtonLoginAbajo"}
            className={"ButtonLoginParteBaja"}
            onclick={"/Login"}
            msn={"Inicia Sesión"}
          ></Button>

          <Button
            linkclassName={"ButtonLoginAbajo"}
            className={"ButtonLoginParteBaja"}
            onclick={"/"}
            msn={"¿Has olvidado tu contraseña?"}
          ></Button>
        </form>
      </div>
    </body>
  );
}

export default FormRegister;








/*import "../../assets/style/Register.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Swal from "sweetalert2";

function FormRegister() {
  const form = useRef();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current);

    if (
      newForm.get("correo") === "" ||
      newForm.get("password") === "" ||
      newForm.get("confirmarPassword") === ""
    ) {
      // Mostrar SweetAlert si hay campos vacíos
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      var raw = JSON.stringify({
        correo: newForm.get("correo"),
        password: newForm.get("password"),
        confirmarPassword: newForm.get("confirmarPassword"),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3010/user/crear", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      Swal.fire({
        title: "¡Felicidades!",
        text: "Registro exitoso.",
        icon: "success",
      });

      navigate("/");
    }
  };
  return (
    <>
      <body className="BodyRegister">
        <div className="PadreRegister">
          <form className={"FormRegister"} action="" ref={form}>
            <Label
              className={"TituloFormRegister"}
              msn={"Unete a nuestra familia"}
            ></Label>
            <img className={"Registerlinea"} src={Img.RegisterLinea} />

            <Label
              className={"CorreoRegister"}
              msn={"Correo Electrónico"}
            ></Label>
            <Input
              className={"InputemailandpasswordRegister"}
              name={"correo"}
              placeholder={"    Email"}
              type={"text"}
            ></Input>

            <Label className={"ContraseñaRegister"} msn={"Contraseña"}></Label>
            <Input
              className={"InputemailandpasswordRegister"}
              name={"password"}
              placeholder={"    Password"}
              type={"password"}
            ></Input>

            <Label
              className={"ContraseñaRegister"}
              msn={"Confirmación de contraseña"}
            ></Label>
            <Input
              className={"InputemailandpasswordRegister"}
              placeholder={"    Password"}
              name={"confirmarPassword"}
              type={"password"}
            ></Input>

            <Button
              linkclassName={"ButtonLoginText"}
              className={"ButtonRegister"}
              onclickfuntion={clickHandler}
              msn={"Registrarse"}
            ></Button>

            <Title
              className={"LoginParteBaja"}
              msn={"¿Ya cuentas con una cuenta?"}
            ></Title>

            <Button
              linkclassName={"ButtonLoginAbajo"}
              className={"ButtonLoginParteBaja"}
              onclick={"/Login"}
              msn={"Inicia Sesión"}
            ></Button>

            <Button
              linkclassName={"ButtonLoginAbajo"}
              className={"ButtonLoginParteBaja"}
              onclick={"/"}
              msn={"¿Has olvidado tu contraseña?"}
            ></Button>
          </form>
        </div>
      </body>
    </>
  );
}

export default FormRegister;*/
