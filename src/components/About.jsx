function About() {
  const highlights = [
    {
      title: "Frontend Engineering",
      description:
        "Building responsive and maintainable web applications using React.js, JavaScript and TypeScript.",
    },
    {
      title: "Reusable Architecture",
      description:
        "Designing reusable components and structured frontend architecture for scalable applications.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving application performance through code splitting, lazy loading and optimized rendering.",
    },
    {
      title: "Responsive UI",
      description:
        "Creating consistent user experiences across desktop, tablet and mobile devices.",
    },
  ];

  const stats = [
    {
      value: "4.5+",
      label: "Years Experience",
    },
    {
      value: "React.js",
      label: "Primary Expertise",
    },
    {
      value: "250+",
      label: "Websites Supported",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building scalable and engaging web experiences
          </h2>

          <p>
            React.js / Frontend Developer focused on building reliable,
            responsive and high-performance web applications.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <p>
              I'm <strong>Ajeeth Kumar S</strong>, a React.js / Frontend
              Developer and Senior Software Engineer with{" "}
              <strong>4.5+ years of professional experience</strong> in
              frontend development.
            </p>

            <p>
              I specialize in building modern user interfaces using React.js,
              JavaScript, TypeScript, Redux, HTML5 and CSS3. My experience
              includes developing reusable components, integrating REST APIs,
              implementing state management and creating responsive web
              applications.
            </p>

            <p>
              I also work on frontend performance optimization, including
              code splitting, lazy loading and improving application
              maintainability. I follow component-based architecture, Git
              workflows and Agile/Scrum practices to deliver reliable
              production applications.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div
                className="highlight-card"
                key={highlight.title}
              >
                <div className="highlight-icon">✓</div>

                <div>
                  <h3>{highlight.title}</h3>

                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;