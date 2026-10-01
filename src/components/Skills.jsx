function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Core technologies I use for building modern web interfaces.",
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
      description: "Tools and technologies used throughout the development lifecycle.",
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
      description: "Techniques and tools for efficient, optimized applications.",
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
      description: "Development practices I follow for maintainable applications.",
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

  const coreSkills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "React Hooks",
    "REST APIs",
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">SKILLS</p>

          <h2>Technologies I work with</h2>

          <p>
            A combination of frontend technologies, development tools and
            engineering practices I use to build scalable and reliable web
            applications.
          </p>
        </div>

        {/* Core Skills */}
        <div className="core-skills">
          <p className="core-skills-label">CORE EXPERTISE</p>

          <div className="core-skills-list">
            {coreSkills.map((skill) => (
              <span key={skill} className="core-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Groups */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-card-number">
                  {String(skillGroups.indexOf(group) + 1).padStart(2, "0")}
                </div>

                <h3>{group.title}</h3>
              </div>

              <p className="skill-card-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;