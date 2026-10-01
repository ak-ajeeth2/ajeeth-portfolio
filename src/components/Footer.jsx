function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-info">
          <h3>Ajeeth Kumar S</h3>
          <p>React.js / Frontend Developer</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/ak-ajeeth2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ajeeth-kumar-968492196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:ajeethkumar15ee002@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © 2026 Ajeeth Kumar S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;