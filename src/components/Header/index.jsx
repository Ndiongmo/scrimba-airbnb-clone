import logo from "../../assets/airbnb1.png";
import Navbar from "./Navbar";

function Header() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar />
        </div>
    );
}

export default Header;
