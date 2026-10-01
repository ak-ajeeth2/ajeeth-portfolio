function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Ajeeth Kumar <span>S</span>
          </h1>

          <h2>React.js / Frontend Developer</h2>

          <p className="hero-role">
            Senior Software Engineer <span>•</span> 4.5+ Years Experience
          </p>

          <p className="hero-description">
            I build responsive, scalable and high-performance web applications
            using React.js, JavaScript, TypeScript, Redux and modern frontend
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects →
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Ajeethkumar_ReactJS.pdf`}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/ak-ajeeth2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH&nbsp; GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ajeeth-kumar-968492196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IN&nbsp; LinkedIn
            </a>

            <a href="mailto:ajeethkumar15ee002@gmail.com">
              @&nbsp; Email
            </a>
          </div>
        </div>

        {/* Right Profile */}
        <div className="hero-profile">
          <div className="hero-profile-glow"></div>

          <div className="hero-profile-ring">
            <img
              src={`${import.meta.env.BASE_URL}ajeeth_Noborder.png`}
              alt="Ajeeth Kumar S - React.js Frontend Developer"
              className="hero-profile-image"
            />
          </div>

          <div className="hero-profile-badge">
            <span className="hero-profile-status"></span>
            Open to Opportunities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;