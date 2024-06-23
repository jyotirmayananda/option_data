import React from 'react';
import logo from '../img/Logo_271x244.png'; // Assuming your image is in the 'img' folder

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <img className="me-3" src={logo} alt="Icon" />
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="#Contact" className="nav-item nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;