import "../../assets/style/footer.css"

function FooterLanding() {
    return (
        <>
            <footer>
                 <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                 </div>
                <ul className="social_icon">
                    <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                </ul>
                <ul className="menu">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/SobreNosotros">Nosotros</a></li>
                    <li><a href="/Register">Registrarse</a></li>
                    <li><a href="/Login">Iniciar Sesión</a></li>
                </ul>
                <p>@2023 Reborn Company | All Rights Reserved</p>
            </footer>
        </>
    );
}

export default FooterLanding;