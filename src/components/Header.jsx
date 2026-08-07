import { useState, useEffect } from "react";
import "./Header.css";
import ThemeSwitch from "./ThemeSwitch.jsx";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");

  // 1. Handle background blur/shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (hash) => activeHash === hash;

  const handleNavClick = (hash) => {
    setActiveHash(hash);
    closeMenu();
  };

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <a href="#" className="logo">
          VLYH
        </a>
        {/*Mobile Hamburger Icon */}
        <button className="burger-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        {/* Navigation Links(Desktop + Mobile Side Drawer) */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {/*Backdrop overlay*/}
          {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

          <li>
            <a href="#about" onClick={() => handleNavClick("#about")} className={isActive("#about") ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleNavClick("#projects")}
              className={isActive("#projects") ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavClick("#skills")} className={isActive("#skills") ? "active" : ""}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => handleNavClick("#education")}
              className={isActive("#education") ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className={isActive("#contact") ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
        <div className="desktop-theme-switch">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
