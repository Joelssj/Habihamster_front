import NavbarLanding from "../components/organisms/NavbarLanding";
import FooterLanding from "../components/organisms/FooterLanding";
import ContenidoLandingSobreNosotros from "../components/organisms/ContenidoLandingSobreNosotros";
import "../assets/style/landingNosotros.css";

function LandingP2() {
    
    return (
        <>
            <NavbarLanding />
            <ContenidoLandingSobreNosotros/>
            <FooterLanding />
        </>
    );
}

export default LandingP2;