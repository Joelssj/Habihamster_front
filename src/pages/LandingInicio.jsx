import NavbarLanding from "../components/organisms/NavbarLanding";
import ContenidoLandingInicio from "../components/organisms/ContenidoLandingInicio";
import FooterLanding from "../components/organisms/FooterLanding";
import "../assets/style/landingInicio.css"

function LandingP1() {
    return (
        <>
            <NavbarLanding />
            <ContenidoLandingInicio />
            <FooterLanding />
        </>
    );
}

export default LandingP1;