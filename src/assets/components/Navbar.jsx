import { useState } from 'react';
import Logo from '../images/Logo.png'
import '../styles/navbar.css';

function Navbar() {

    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');
  
      toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
    }
  
  return (
    <div className="navbar">
        <div className="logo">
            <img src={Logo} />
            <p>Interno</p>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={active}>
        <li className="nav-item">
          <a href="/" className="nav-link" >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link" >
            Pages
          </a>
        </li>
        <li className="nav-item">
          <a href="/shop" className="nav-link" >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar