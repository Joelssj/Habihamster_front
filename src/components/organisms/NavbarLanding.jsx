import { Link } from "react-router-dom";
import WrapperLabel from "../molecules/WraperLabel";
import "../../assets/style/navbarL1.css";
import Title from "../atoms/Title";

function NavbarLanding() {
    return (
        <header>
            <div className="nadvarpadre">
                <div className="nadvhijo1">
                    <Title msn={"HABI"}></Title>
                </div>
                <div className="nadvhijo2">
                    <Title msn={"HAMSTER"}></Title>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/"><WrapperLabel msn="INICIO" /></Link></li>
                    <li><Link to="/SobreNosotros"><WrapperLabel msn="NOSOTROS" /></Link></li>
                    <li><Link to="/Register"><WrapperLabel msn="REGISTRARSE" /></Link></li>
                    <li><Link to="/Login"><WrapperLabel msn="INICIAR SESIÓN" /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarLanding;