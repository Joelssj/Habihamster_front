import "../../assets/style/Register.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Img from "../../assets/js/img";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

function FormRegister() {
    return (
        <>
        <body className="BodyRegister">
            <div className="PadreRegister">
                <form className={"FormRegister"} action="">
                    <Label className={"TituloFormRegister"} msn={"Unete a nuestra familia"}></Label>
                    <img className={"Registerlinea"} src={Img.RegisterLinea} />
                    
                    <Label className={"CorreoRegister"} msn={"Correo Electrónico"}></Label>
                    <Input className={"InputemailandpasswordRegister"} placeholder={"    Email"} type={"text"}></Input>
                    
                    <Label className={"ContraseñaRegister"} msn={"Contraseña"}></Label>
                    <Input className={"InputemailandpasswordRegister"} placeholder={"    Password"} type={"password"}></Input>
                    
                    <Label className={"ContraseñaRegister"} msn={"Confirmación de contraseña"}></Label>
                    <Input className={"InputemailandpasswordRegister"} placeholder={"    Password"} type={"password"}></Input>

                    <Button linkclassName={"ButtonLoginText"} className={"ButtonRegister"} onclick={"/"} msn={'Iniciar Sesión'}></Button>
                    
                    <Title className={"LoginParteBaja"} msn={"¿Ya cuentas con una cuenta?"}></Title>
                    
                    <Button linkclassName={"ButtonLoginAbajo"} className={"ButtonLoginParteBaja"} onclick={"/Login"} msn={'Inicia Sesión'}></Button>
                    
                    <Button linkclassName={"ButtonLoginAbajo"} className={"ButtonLoginParteBaja"} onclick={"/"} msn={'¿Has olvidado tu contraseña?'}></Button>
                </form>
            </div>
        </body>
        </>
    );
}

export default FormRegister;