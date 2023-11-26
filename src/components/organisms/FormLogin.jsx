import "../../assets/style/Login.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

function FormLogin() {
    return (
        <>
        <body className="BodyLogin">
            <div className="PadreLogin">
                <form className={"FormLogin"} action="">
                    <Label className={"TituloFormLogin"} msn={"Bienvenido"}></Label>
                    <img className={"Loginlinea"} src={Img.LoginLinea} />
                    <Label className={"Correo"} msn={"Correo Electrónico"}></Label>
                    <Input className={"Inputemailandpassword"} placeholder={"    Email"} type={"text"}></Input>
                    <Label className={"Contraseña"} msn={"Contraseña"}></Label>
                    <Input className={"Inputemailandpassword"} placeholder={"    Password"} type={"password"}></Input>
                    <Button linkclassName={"ButtonLoginText"} className={"ButtonLogin"} onclick={"/Graficas"} msn={'Iniciar Sesión'}></Button>
                    <Title className={"LoginParteBaja"} msn={"Aun no tienes cuenta"}></Title>
                    <Button linkclassName={"ButtonLoginAbajo"} className={"ButtonLoginParteBaja"} onclick={"/"} msn={'Registrate'}></Button>
                    <Title className={"LoginParteBaja"} msn={"¿Has olvidado tu contraseña?"}></Title>
                    <Button linkclassName={"ButtonLoginAbajo"} className={"ButtonLoginParteBaja"} onclick={"/"} msn={'Has click aquí'}></Button>
                </form>
            </div>
        </body>
        </>
    );
}

export default FormLogin;