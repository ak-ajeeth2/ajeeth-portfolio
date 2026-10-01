function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React Hooks",
        "React Router",
        "Redux",
        "Redux Forms",
      ],
    },
    {
      title: "API & Development Tools",
      skills: [
        "REST APIs",
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "Docker",
        "VS Code",
        "Browser DevTools",
      ],
    },
    {
      title: "Build & Performance",
      skills: [
        "Webpack",
        "Babel",
        "Gulp",
        "Code Splitting",
        "Lazy Loading",
        "Performance Optimization",
        "Responsive Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      title: "Engineering Practices",
      skills: [
        "Reusable Components",
        "Component-Based Architecture",
        "Agile / Scrum",
        "Jira",
        "Code Reviews",
        "Production Deployment",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">SKILLS</p>

          <h2>
            Technologies I work with
          </h2>

          <p>
            A combination of frontend technologies, development tools and
            engineering practices I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              className="skill-card"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;