import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          AK
        </a>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

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

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;