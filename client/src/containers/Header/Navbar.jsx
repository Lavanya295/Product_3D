import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";

const Navbar = () => {
  const navigate=useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sticky navbar function
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", this.scrollY > 0);
  });

  return (
    <nav className={`navbar h-16 pt-[25px] pb-[60px] p-[5%] max-sm:px-0 max-sm:py-5 flex`}>
      <div className="pl-5">
        <Link to="/">
          <div className="mt-9 align-center items-center">
            <img
              className="w-50 h-40 max-sm:ml-[-5px] max-sm:h-32 max-sm:mt-[-30px] "
              src={logo}
              alt="ProductLogo"
            />
          </div>
        </Link>
      </div>
      <div className="ml-auto max-lg:hidden space-x-10 pr-5">
        <Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/guidebook"
          className={`link ${location.pathname === "/guidebook" ? "active" : ""}`}
        >
          Guide Book
        </Link>
        <Link
          to="/contact"
          className={`link ${location.pathname === "/contact" ? "active" : ""}`}
        >
          Contributors
        </Link>
        <Link
          to="/faq"
          className={`link ${location.pathname === "/faq" ? "active" : ""}`}
        >
          {" "}
          FAQ's
        </Link>

        <button className="tryfree-btn justify-center p-2 rounded-md h-10" onClick={()=>navigate("/signup")}>
          Try Free
        </button>
      </div>

      <div className="ml-auto mr-5 mt-[-1rem] lg:hidden">
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {isMobileMenuOpen && (

  <div className="mobile-menu" style={{ width: "70%", textAlign: "right" }}>
    <Link
      to="/"
      className={`link ${location.pathname === "/" ? "active" : ""}`}
      onClick={toggleMobileMenu}
      style={{ justifyContent: "flex-end" }}
    >
      Home
    </Link>
    <Link
      to="/guidebook"
      className={`link ${
        location.pathname === "/guidebook" ? "active" : ""
      }`}
      onClick={toggleMobileMenu}
      style={{ justifyContent: "flex-end" }}
    >
      Guide Book
    </Link>
    <Link
      to="/customize"
      className={`link ${
        location.pathname === "/customize" ? "active" : ""
      }`}
      onClick={toggleMobileMenu}
      style={{ justifyContent: "flex-end" }}
    >
      Customize
    </Link>
    <Link
      to="/contact"
      className={`link ${
        location.pathname === "/contact" ? "active" : ""
      }`}
      onClick={toggleMobileMenu}
      style={{ justifyContent: "flex-end" }}
    >
      Contact Us
    </Link>
    <Link
      to="/faq"
      className={`link ${location.pathname === "/faq" ? "active" : ""}`}
      onClick={toggleMobileMenu}
      style={{ justifyContent: "flex-end" }}
    >
      {" "}
      FAQ's
    </Link>
    <button
      className="justify-center border-[1px] p-2 rounded-md"
      style={{ justifyContent: "center" }}
    >
      Try Free
    </button>
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
