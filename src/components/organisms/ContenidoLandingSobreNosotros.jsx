import Title from "../atoms/Title"
import "../../assets/style/landingNosotros.css";
import Button from "../atoms/Button";
import Img from "../../assets/js/img";

function ContenidoLandingSobreNosotros() {

    return (
        <>
            {/* Zona de contenido 1 */}
            <div className="PadreLandingNosotrosInfo">

                <div className="Hijo1LandingNosotrosInfo">
                    <Title msn={'Nosotros'}></Title>
                    <p>Nosotros somos HabiHamster, somos un equipo de desarrollo de aplicaciones web enfocado en desarrollar diversos software como herramientas para nuestros clientes,
                        HabiHamster es una herramienta para nuestros usuarios, nosotros hemos desarrollado un hábitat inteligente para poder brindar confianza, facilidad y seguridad en la crianza
                        de la mascota de nuestros usuarios</p>
                    <div className="ButtonDivLandingNosotros">
                        <Button linkclassName={"Button_DivIzquierdo_Nosotros"} className={"Button_DivIzquierdo_Nosotros"} onclick={"/Register"} msn={'¡Te esperamos!'}></Button>
                    </div>
                </div>

                <div className="Hijo2LandingNosotrosInfo">
                    <img className={"ImgDivDerechoNosotros"} src={Img.HamsterLandingContenidoIzquierdo} />
                </div>
            </div>

            {/* Zona de contenido 2 */}

            <div className="PadreLandingNosotrosInfo2">
                <div className="Hijo1LandingNosotrosInfo2">
                    <img className={"ImgHamsterContenido2Nosotros"} src={Img.HamsterLandingNosotrosContenido2} />
                </div>
                <div className="Hijo2LandingNosotrosInfo2">
                    <p>Somos líderes en el mercado gracias a nuestra continua innovación y al desarrollo de herramientas excepcionales para el cuidado de tus adorados hamsters. Nos destacamos
                        por ofrecer productos de la más alta calidad que no solo brindan seguridad, sino que también simplifican el día a día de cuidar a tus mascotas. Nuestros habitats inteligentes
                        han sido cuidadosamente diseñados para garantizar un entorno cómodo y agradable para tus hamsters, proporcionando una experiencia única y sin complicaciones para dueños comprometidos
                        con el bienestar de sus pequeños compañeros.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ContenidoLandingSobreNosotros;