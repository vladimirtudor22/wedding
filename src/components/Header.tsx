import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo-dark.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <a href="#acasa" onClick={() => setIsOpen(false)}>
            Acasă
          </a>
          <a href="#poveste" onClick={() => setIsOpen(false)}>
            Povestea Noastră
          </a>
          <a href="#confirmare" onClick={() => setIsOpen(false)}>
            Confirmă prezența
          </a>
        </nav>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
