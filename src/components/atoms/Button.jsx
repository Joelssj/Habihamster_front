import { Link } from "react-router-dom";
import "../../assets/style/linkto.css";

function Button({msn,onclick,className,linkclassName}) {
    return (
        <button className={className} type="button"><Link className={linkclassName} to={onclick}>{msn}</Link></button>
    );
}

export default Button;