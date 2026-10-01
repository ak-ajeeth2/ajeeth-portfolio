function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="section-heading contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>Let's connect</h2>

          <p>
            Interested in discussing a project, opportunity or frontend
            development? Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-card">
            <h3>Get in touch</h3>

            <p>
              I'm always open to connecting with developers, recruiters and
              teams working on interesting frontend applications.
            </p>

            <div className="contact-links">

              {/* Phone */}
              <a href="tel:+917200695913">
                <span className="contact-icon">☎</span>

                <span>
                  <strong>Phone</strong>
                  <small>+91 72006 95913</small>
                </span>
              </a>

              {/* Email */}
              <a href="mailto:ajeethkumar15ee002@gmail.com">
                <span className="contact-icon">@</span>

                <span>
                  <strong>Email</strong>
                  <small>ajeethkumar15ee002@gmail.com</small>
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajeeth-kumar-968492196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">IN</span>

                <span>
                  <strong>LinkedIn</strong>
                  <small>Connect with me on LinkedIn</small>
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ak-ajeeth2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">GH</span>

                <span>
                  <strong>GitHub</strong>
                  <small>View my GitHub profile</small>
                </span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;