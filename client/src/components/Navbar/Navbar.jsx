import './Navbar.css'
import {assets} from '../../assets/assets.js'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo" className='logo'/>
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="nav-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar