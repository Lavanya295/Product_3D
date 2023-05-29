import React, { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';
import Button from '../../components/Button';
import { logo } from '../../assets';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    setIsDarkMode(currentMode === 'true');
    applyDarkMode(currentMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    applyDarkMode(newMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const applyDarkMode = (isDark) => {
    // Apply dark mode styles to your application here
    if (isDark) {
      // Apply dark mode styles
      document.documentElement.classList.add('dark-mode');
    } else {
      // Remove dark mode styles
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <nav className={`container mx-auto px-4 py-5 pt-8 nav-container  navbar flex flex-row ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="pl-5">
        <Link to="/">
          <img className="w-12 justify-center align-middle" src={logo} alt="Logo" />
        </Link>
          {/* <p className="Brand-heading">PRODUCT 3D</p> */}
      </div>
      <div className="ml-auto max-sm:hidden space-x-10 pr-5">
        <Link to="/" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/guidebook"className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/guidebook' ? 'active' : ''}`}>Guide Book</Link>
        <Link to="/contact" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/contact' ? 'active' : ''}`}>Contributors</Link>
        <Link to="/faq" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/faq' ? 'active' : ''}`}> FAQ's</Link>
        <Button>Try now</Button>
      </div>

      <div className="ml-auto mr-5 sm:hidden">
        <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className=" mobile-menu ">
          <Link to="/" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMobileMenu}>Home</Link>
        <Link to="/guidebook"className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/guidebook' ? 'active' : ''}`} onClick={toggleMobileMenu}>Guide Book</Link>
        <Link to="/customize" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/customize' ? 'active' : ''}`} onClick={toggleMobileMenu}>Customize</Link>
        <Link to="/contact" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/contact' ? 'active' : ''}`} onClick={toggleMobileMenu}>Contact Us</Link>
        <Link to="/faq" className={`link hover:text-blue-500 cursor-pointer ${location.pathname === '/faq' ? 'active' : ''}`} onClick={toggleMobileMenu}> FAQ's</Link>
        <Button>Try now</Button>
        </div>
      )}


       {/* Dark Mode Feature - will add on customizer Page later  */}

      {/* <div className="switch-container max-sm:hidden flex flex-row overflow-hidden mr-5">
        <input className="darkmode-input" type="checkbox" id="switch" checked={isDarkMode} onChange={toggleDarkMode} />
        <label htmlFor="switch">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <span className="ball"></span>
        </label>
      </div> */}
    </nav>
  );
};

export default Navbar;
