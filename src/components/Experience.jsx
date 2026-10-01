function Experience() {
  const experiences = [
    {
      company: "Mobius Knowledge Services Pvt. Ltd.",
      role: "Senior Software Engineer",
      period: "Dec 2025 – Present",
      project: "Vue.ai Platform",
      current: true,
      description:
        "Working on frontend development for an AI-powered retail platform focused on product discovery, personalization and visual merchandising.",
      responsibilities: [
        "Develop responsive and reusable UI components using React.js, JavaScript and modern frontend practices.",
        "Manage application state using Redux and integrate REST APIs for frontend functionality.",
        "Implement code splitting and lazy loading to improve application performance and loading experience.",
        "Build reusable component architecture and optimize frontend performance.",
        "Work on security improvements for third-party CSS and JavaScript libraries.",
        "Participate in sprint planning, code reviews and production deployments using Agile/Scrum practices.",
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
        "Babel",
        "Gulp",
        "Git",
        "Docker",
        "Jira",
      ],
    },
    {
      company: "Rifluxyss Software Pvt. Ltd.",
      role: "React.js Developer / Junior Software Developer",
      period: "Mar 2022 – Dec 2025",
      project: "PalmAgent",
      description:
        "Worked on a real-estate property management and marketing platform supporting 250+ real-estate websites.",
      responsibilities: [
        "Developed responsive and reusable frontend components using React.js, TypeScript, Redux and Redux Forms.",
        "Integrated Google Maps API for location-based functionality.",
        "Implemented Safari support and Firebase Cloud Messaging (FCM) push notifications.",
        "Developed a lead-generation calculator mobile application.",
        "Improved frontend performance and reduced initial application load time by approximately 10%.",
        "Worked on cross-browser responsive UI development and reusable component architecture.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "Redux Forms",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "Git",
      ],
      achievement: "Best Performer Award – September 2022 & June 2023",
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>Professional experience</h2>

          <p>
            4.5+ years of experience building responsive, scalable and
            performance-focused frontend applications across different
            products and teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              className={`experience-card ${
                experience.current ? "experience-current" : ""
              }`}
              key={`${experience.company}-${experience.period}`}
            >
              {/* Timeline */}
              <div className="experience-timeline">
                <span className="experience-dot"></span>

                {index !== experiences.length - 1 && (
                  <span className="experience-line"></span>
                )}
              </div>

              {/* Card Content */}
              <div className="experience-card-content">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <div className="experience-role-row">
                      <h3>{experience.role}</h3>

                      {experience.current && (
                        <span className="current-badge">Current</span>
                      )}
                    </div>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                    <p className="experience-project">
                      <span>Project:</span> {experience.project}
                    </p>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-responsibility-block">
                  <h4>Key Responsibilities</h4>

                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>
                        <span className="responsibility-icon">✓</span>

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Technologies</h4>

                  <div className="technology-tags">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {experience.achievement && (
                  <div className="experience-achievement">
                    <span className="achievement-icon">★</span>

                    <div>
                      <strong>Achievement</strong>
                      <span>{experience.achievement}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;