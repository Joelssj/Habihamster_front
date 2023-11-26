import Title from "../atoms/Title"
import "../../assets/style/landingInicio.css";
import Button from "../atoms/Button";
import Img from "../../assets/js/img";

function ContenidoLandingInicio() {

    return (
        <>
            {/* Zona de contenido 1 */}
            <div className="PadreLandingInfo">

                <div className="Hijo1LandingInfo">
                    <Title msn={'"Donde la ternura se encuentra con la diversión."'}></Title>
                    <div className="ButtonDivLanding">
                        <Button linkclassName={"Button_Div_Izquierdo_Inicio"} className={"Button_Div_Izquierdo_Inicio"} onclick={"/Register"} msn={"Descubre el mundo de los hamsters"}></Button>
                    </div>
                </div>

                <div className="Hijo2LandingInfo">
                    <img className={"ImgDivDerecho"} src={Img.LandingHamsterDivIzquierdo} />
                </div>
            </div>

            {/* Zona de contenido 2 */}

            <div className="PadreLandingInfo2">
                <div className="Hijo1LandingInfo2">
                    <p>HabiHamster es un producto desarrollado por la empresa RebornCompany, nosotros somos brindamos una herramienta la cual facilita la crianza de tu mascota. Somos la mejor herramienta la cual te ayudara a mantener en óptimas condiciones el hábitat de tu mascota, manteniéndolo saludable y feliz.</p>
                </div>
                <div className="Hijo2LandingInfo2">
                    <img className={"ImgHamsterContenido2"} src={Img.LandingContenido2HamsterTexto} />
                </div>
            </div>
        </>
    );
}

export default ContenidoLandingInicio;