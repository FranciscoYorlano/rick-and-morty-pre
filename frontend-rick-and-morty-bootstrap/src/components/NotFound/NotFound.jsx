import logo from "../../assets/rick-and-morty.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>Sorry, this page isn't available.</h2>
            <p>
                The link you followed may be broken, or the page may have been
                removed. Go back to <Link to="/home">Rick and Morty App</Link>.
            </p>

            <Link to="/home">
                <img src={logo} alt="Rick And Morty App" />
            </Link>
        </div>
    );
}

export default NotFound;
