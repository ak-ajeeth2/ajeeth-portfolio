function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "Best Performer Award",
      organization: "Rifluxyss Software Pvt. Ltd.",
      description:
        "Recognized with the Best Performer Award for strong contribution and performance in September 2022 and June 2023.",
      highlight: "Sep 2022 & Jun 2023",
    },
    {
      number: "02",
      title: "Performance Optimization",
      organization: "PalmAgent",
      description:
        "Contributed to frontend performance improvements that reduced the initial application load time by approximately 10%.",
      highlight: "~10% Load Time Reduction",
    },
    {
      number: "03",
      title: "250+ Websites Supported",
      organization: "PalmAgent",
      description:
        "Contributed to a real-estate property management and marketing platform supporting more than 250 real-estate websites.",
      highlight: "250+ Websites",
    },
    {
      number: "04",
      title: "4.5+ Years of Experience",
      organization: "Frontend Development",
      description:
        "Built professional experience across React.js, JavaScript, TypeScript, Redux, REST APIs, responsive UI and frontend performance optimization.",
      highlight: "4.5+ Years",
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">ACHIEVEMENTS</p>

          <h2>Highlights from my professional journey</h2>

          <p>
            A few measurable accomplishments and milestones from my frontend
            development experience.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.number}>
              <div className="achievement-card-top">
                <span className="achievement-number">
                  {achievement.number}
                </span>

                <span className="achievement-highlight">
                  {achievement.highlight}
                </span>
              </div>

              <h3>{achievement.title}</h3>

              <p className="achievement-organization">
                {achievement.organization}
              </p>

              <p className="achievement-description">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

