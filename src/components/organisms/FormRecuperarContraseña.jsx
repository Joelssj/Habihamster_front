import "../../assets/style/RecuperarContraseña.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";

function FormRecuperarContraseña() {
    return (
        <>
        <body className="BodyRecuperarContraseña">
            <div className="PadreRecuperarContraseña">
                <form className={"FormRecuperarContraseña"} action="">
                    <Label className={"TituloFormRecuperarContraseña"} msn={"Restablecer contraseña"}></Label>
                    <img className={"RecuperarContraseñalinea"} src={Img.RecuperarContraseñaLinea} />
                    <Label className={"CorreoRecuperarContraseña"} msn={"Correo Electrónico"}></Label>
                    <Input className={"InputemailandpasswordRecuperar"} placeholder={"    Email"} type={"text"}></Input>
                    <Label className={"ContraseñaRecuperarContraseña"} msn={"Contraseña Nueva"}></Label>
                    <Input className={"InputemailandpasswordRecuperar"} placeholder={"    Password"} type={"password"}></Input>
                    <Label className={"ContraseñaRecuperarContraseña"} msn={"Confirmación de contraseña"}></Label>
                    <Input className={"InputemailandpasswordRecuperar"} placeholder={"    Password"} type={"password"}></Input>
                    <Button linkclassName={"ButtonLoginText"} className={"ButtonRecuperarContraseña"} onclick={"/"} msn={'Confirmar'}></Button>
                </form>
            </div>
        </body>
        </>
    );
}

export default FormRecuperarContraseña;