import logo from '../../assets/images/airbnb1.png'
import Navbar from './Navbar'

function Header() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="AirBnb" />
            <Navbar />
        </div>
    )
}

export default Header
