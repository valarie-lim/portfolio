import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Added standard router hooks
import "./Header.css";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { SITE_CONFIG } from "../config";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation(); // Tracks the current active page route path

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

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="nav-container">
        {/* Logo routes cleanly back to the absolute root home landing view */}
        <Link to="/" className="logo" onClick={closeMenu}>
          {SITE_CONFIG.authorName}
        </Link>

        {/* Mobile Hamburger Icon */}
        <button className="burger-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        {/* Navigation Links (Desktop + Mobile Side Drawer) */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {/* Backdrop overlay */}
          {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

          {/* Section links prefixed with '/' to guarantee cross-page section anchor snaps */}
          <li>
            <a href="/#about" onClick={closeMenu} className={location.hash === "#about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={closeMenu} className={location.hash === "#projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={closeMenu} className={location.hash === "#skills" ? "active" : ""}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#education" onClick={closeMenu} className={location.hash === "#education" ? "active" : ""}>
              Education
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu} className={location.hash === "#contact" ? "active" : ""}>
              Contact
            </a>
          </li>

          {/* Standing direct Link route targets our dedicated standalone blog feed */}
          <li>
            <Link to="/blog" onClick={closeMenu} className={location.pathname.startsWith("/blog") ? "active" : ""}>
              Blog
            </Link>
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
