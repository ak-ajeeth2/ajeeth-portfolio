function Projects() {
  const projects = [
    {
      title: "Vue.ai Platform",
      category: "Professional Project",
      company: "Mobius Knowledge Services Pvt. Ltd.",
      description:
        "AI-powered retail platform focused on product discovery, personalization and visual merchandising. Contributed to frontend development, reusable component architecture, state management and application performance.",
      contributions: [
        "Developed responsive and reusable React.js components.",
        "Implemented Redux-based state management and REST API integrations.",
        "Worked on code splitting, lazy loading and frontend performance optimization.",
        "Contributed to security improvements for third-party CSS and JavaScript libraries.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "Webpack",
        "Docker",
      ],
    },
    {
      title: "PalmAgent",
      category: "Professional Project",
      company: "Rifluxyss Software Pvt. Ltd.",
      scale: "250+ Real-Estate Websites",
      description:
        "Real-estate property management and marketing platform supporting 250+ websites. Contributed to responsive UI development, reusable components, API integrations, maps, notifications and frontend performance.",
      contributions: [
        "Developed responsive and reusable components using React.js, TypeScript and Redux.",
        "Integrated Google Maps API for location-based functionality.",
        "Implemented Safari support and Firebase Cloud Messaging notifications.",
        "Developed a lead-generation calculator mobile application.",
        "Reduced initial application load time by approximately 10%.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "Redux Forms",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Google Maps API",
      ],
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>Professional work</h2>

          <p>
            Selected professional projects that demonstrate my experience in
            React.js development, frontend architecture, API integration and
            performance optimization.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {/* Header */}
              <div className="project-card-header">
                <span className="project-category">
                  {project.category}
                </span>

                {project.scale && (
                  <span className="project-scale">
                    {project.scale}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h3>{project.title}</h3>

              <p className="project-company">
                {project.company}
              </p>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Contributions */}
              <div className="project-contributions">
                <h4>Key Contributions</h4>

                <ul>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>
                      <span className="project-check">✓</span>

                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-technologies">
                <h4>Technologies</h4>

                <div className="project-tech-list">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="project-tech"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Private Source Notice */}
              <div className="project-private">
                <span>Professional Project</span>
                <span>Source code is private</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;