function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>Let's connect</h2>

          <p>
            I'm open to React.js and frontend development opportunities.
            Feel free to reach out to discuss a role, collaboration or
            professional opportunity.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          <div className="contact-card">
            {/* Card Header */}
            <div className="contact-card-header">
              <div>
                <span className="contact-status">
                  <span></span>
                  Open to Opportunities
                </span>

                <h3>Get in touch</h3>
              </div>

              <div className="contact-card-mark">AK</div>
            </div>

            <p className="contact-intro">
              I'm currently open to React.js / Frontend Developer
              opportunities and professional collaborations. The best way to
              reach me is through email or LinkedIn.
            </p>

            {/* Contact Links */}
            <div className="contact-links">
              {/* Phone */}
              <a href="tel:+917200695913" className="contact-link">
                <span className="contact-icon">☎</span>

                <span className="contact-link-content">
                  <strong>Phone</strong>
                  <small>+91 72006 95913</small>
                </span>

                <span className="contact-arrow">→</span>
              </a>

              {/* Email */}
              <a
                href="mailto:ajeethkumar15ee002@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>

                <span className="contact-link-content">
                  <strong>Email</strong>
                  <small>ajeethkumar15ee002@gmail.com</small>
                </span>

                <span className="contact-arrow">→</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajeeth-kumar-968492196/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">IN</span>

                <span className="contact-link-content">
                  <strong>LinkedIn</strong>
                  <small>Connect with me on LinkedIn</small>
                </span>

                <span className="contact-arrow">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ak-ajeeth2"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">GH</span>

                <span className="contact-link-content">
                  <strong>GitHub</strong>
                  <small>View my GitHub profile</small>
                </span>

                <span className="contact-arrow">↗</span>
              </a>
            </div>

            {/* Availability */}
            <div className="contact-availability">
              <div className="availability-icon">✓</div>

              <div>
                <strong>Available for frontend opportunities</strong>

                <span>
                  React.js • JavaScript • TypeScript • Redux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;