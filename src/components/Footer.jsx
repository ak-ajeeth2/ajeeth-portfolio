
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <a href="#home" className="footer-brand">
            <span className="footer-logo">AK</span>

            <span>
              <strong>Ajeeth Kumar S</strong>
              <small>React.js / Frontend Developer</small>
            </span>
          </a>

          <p>
            Building responsive, scalable and high-performance web
            applications with React.js and modern frontend technologies.
          </p>
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

          <a href="tel:+917200695913">
            Phone
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2026 Ajeeth Kumar S. All rights reserved.</p>

          <span>
            Built with React.js
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
