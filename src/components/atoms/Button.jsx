import { Link } from "react-router-dom";
import "../../assets/style/linkto.css";

function Button({msn,onclick,className,linkclassName,onclickfuntion}) {
    return (
        <button className={className} type="button"><Link className={linkclassName} to={onclick}
        onClick={onclickfuntion}>{msn}</Link></button>
    );
}

export default Button;