import logo from '../../assets/images/logo.png'
import './style.css'
const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo do Rick e Morty" id="Header"/>
        </header>
    )
}

export default Header;