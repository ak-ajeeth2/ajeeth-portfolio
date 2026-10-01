function Projects() {
  const projects = [
    {
      title: "Vue.ai Platform",
      category: "Professional Project",
      description:
        "AI-powered retail platform focused on product discovery, personalization and visual merchandising. Worked on responsive frontend experiences, reusable components, state management and performance optimization.",
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
      type: "Professional Experience",
    },
    {
      title: "PalmAgent",
      category: "Professional Project",
      description:
        "Real-estate property management and marketing platform supporting 250+ real-estate websites. Worked on responsive UI, reusable components, API integrations, maps, notifications and frontend performance.",
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
      type: "Professional Experience",
    },
    // {
    //   title: "Employee Task Management",
    //   category: "Personal Project",
    //   description:
    //     "Full-stack task management application with authentication, protected routes, employee management, task management and user profile functionality.",
    //   technologies: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Mongoose",
    //     "JWT",
    //     "bcryptjs",
    //   ],
    //   type: "Personal Project",
    //   github: "https://github.com/ak-ajeeth2",
    // },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>
            Projects &amp; work
          </h2>

          <p>
            A selection of professional and personal projects that demonstrate
            my frontend development and engineering experience.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-card-header">
                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-type">
                  {project.type}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="project-tech"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View GitHub →
                </a>
              )}
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;