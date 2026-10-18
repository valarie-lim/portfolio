import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { SITE_CONFIG } from "../config";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();

  // 1. Handle background blur/shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. IntersectionObserver to detect which section is currently on screen
  useEffect(() => {
    // Only track scroll sections if we are on the home page
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "projects", "skills", "education", "contact"];

    const observerOptions = {
      root: null, // viewport
      rootMargin: "-20% 0px -60% 0px", // Triggers when section occupies the sweet spot of the screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section element on the DOM
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]); // Re-run if we switch away/back to home page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper function to determine if a link is active
  const isSectionActive = (hash) => {
    if (location.pathname !== "/") return false;
    return activeSection === hash.replace("#", "");
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

          <li>
            <Link to="/#about" onClick={closeMenu} className={isSectionActive("#about") ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={closeMenu} className={isSectionActive("#projects") ? "active" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={closeMenu} className={isSectionActive("#skills") ? "active" : ""}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/#education" onClick={closeMenu} className={isSectionActive("#education") ? "active" : ""}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu} className={isSectionActive("#contact") ? "active" : ""}>
              Contact
            </Link>
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
