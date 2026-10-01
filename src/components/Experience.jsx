function Experience() {
  const experiences = [
    {
      company: "Mobius Knowledge Services Pvt. Ltd.",
      role: "Senior Software Engineer",
      period: "Dec 2025 – Present",
      project: "Vue.ai Platform",
      description:
        "Working on frontend development for an AI-powered retail platform focused on product discovery, personalization and visual merchandising.",
      responsibilities: [
        "Developing responsive and reusable UI components using React.js, JavaScript and modern frontend practices.",
        "Managing application state using Redux and integrating REST APIs for frontend functionality.",
        "Implemented code splitting and lazy loading to improve application performance and loading experience.",
        "Worked on reusable component architecture and frontend performance optimization.",
        "Handled security improvements for third-party CSS and JavaScript libraries.",
        "Participated in sprint planning, code reviews and production deployments using Agile/Scrum practices.",
      ],
      technologies:
        "React.js, Redux, JavaScript, HTML5, CSS3, Bootstrap, REST APIs, Webpack, Babel, Gulp, Git, Docker, Jira",
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
        "Implemented Safari support and Firebase Cloud Messaging (FCM) push notification functionality.",
        "Developed a lead-generation calculator mobile application.",
        "Improved frontend performance and reduced initial application load time by approximately 10%.",
        "Worked on cross-browser responsive UI development and reusable component architecture.",
      ],
      technologies:
        "React.js, TypeScript, Redux, Redux Forms, JavaScript, HTML5, CSS3, Bootstrap, REST APIs, Git",
      achievement:
        "Best Performer Award – September 2022 & June 2023",
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            Professional experience
          </h2>

          <p>
            My experience building responsive, scalable and performance-focused
            frontend applications across different products and teams.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.period}`}
            >
              <div className="experience-header">

                <div>
                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <p className="experience-project">
                    Project: {experience.project}
                  </p>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>

              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <ul className="experience-responsibilities">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>

              <div className="experience-technologies">
                <strong>Technologies:</strong>
                <span>{experience.technologies}</span>
              </div>

              {experience.achievement && (
                <div className="experience-achievement">
                  <strong>Achievement:</strong>
                  <span>{experience.achievement}</span>
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;