function About() {
  const highlights = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and maintainable web applications using React.js, JavaScript and TypeScript.",
    },
    {
      title: "Reusable Architecture",
      description:
        "Creating reusable components and structured frontend architecture for scalable applications.",
    },
    {
      title: "Performance",
      description:
        "Working with code splitting, lazy loading and frontend performance optimization.",
    },
    {
      title: "Responsive UI",
      description:
        "Developing user interfaces that work consistently across desktop, tablet and mobile devices.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building modern web experiences
          </h2>

          <p>
            A frontend developer focused on creating scalable, responsive and
            user-friendly web applications.
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm <strong>Ajeeth Kumar S</strong>, a React.js / Frontend
              Developer and Senior Software Engineer with 4.5+ years of
              professional experience building web applications.
            </p>

            <p>
              My core expertise includes React.js, JavaScript, TypeScript,
              Redux, HTML5, CSS3, REST APIs and responsive web development.
              I focus on creating reusable components, clean frontend
              architecture and reliable user interfaces.
            </p>

            <p>
              I also have experience with frontend performance optimization,
              state management, API integration, code splitting, lazy loading,
              Git-based development and Agile/Scrum practices.
            </p>
          </div>

          <div className="about-highlights">

            {highlights.map((highlight) => (
              <div
                className="highlight-card"
                key={highlight.title}
              >
                <div className="highlight-icon">
                  ✓
                </div>

                <div>
                  <h3>{highlight.title}</h3>

                  <p>
                    {highlight.description}
                  </p>
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