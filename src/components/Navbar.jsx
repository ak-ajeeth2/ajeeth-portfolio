import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo / Brand */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="logo">AK</span>

          <span className="brand-info">
            <span className="brand-name">Ajeeth Kumar S</span>
            <span className="brand-role">
              React.js / Frontend Developer
            </span>
          </span>
        </a>

        {/* Navigation */}
        <nav
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#achievements" onClick={closeMenu}>
            Achievements
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="nav-socials">
          <a
            href="https://github.com/ak-ajeeth2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/ajeeth-kumar-968492196/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            IN
          </a>

          <a
            href="mailto:ajeethkumar15ee002@gmail.com"
            aria-label="Email"
          >
            @
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;