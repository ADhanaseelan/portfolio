import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">📬 Contact Me</h2>
      <p className="contact-desc">
        Reach out for collaborations, questions, or just to say hi!<br />
        I’m always open to new opportunities and connections.
      </p>
      <div className="contact-cards">
        <a
          href="mailto:dhanaseelandhanaseelan464@gmail.com"
          className="contact-card email-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon email-anim">✉️</span>
          <span className="contact-label">Email</span>
          <span className="contact-value">dhanaseelandhanaseelan464@gmail.com</span>
        </a>
        <a
          href="tel:+916383694530"
          className="contact-card phone-card"
        >
          <span className="contact-icon phone-anim">📞</span>
          <span className="contact-label">Mobile</span>
          <span className="contact-value">+91 63836 94530</span>
        </a>
        <a
          href="https://wa.me/916383694530"
          className="contact-card whatsapp-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon whatsapp-anim">💬</span>
          <span className="contact-label">WhatsApp</span>
          <span className="contact-value">+91 63836 94530</span>
        </a>
        <a
          href="https://maps.google.com/?q=Erode,Tamil+Nadu,India"
          className="contact-card location-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon location-anim">📍</span>
          <span className="contact-label">Location</span>
          <span className="contact-value">Erode, Tamil Nadu, India</span>
          <span className="contact-map-link">View on Map</span>
        </a>
        <a
          href="https://github.com/ADhanaseelan"
          className="contact-card github-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon github-anim">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/>
            </svg>
          </span>
          <span className="contact-label">GitHub</span>
          <span className="contact-value">ADhanaseelan</span>
        </a>
        <a
          href="https://www.linkedin.com/in/dhanaseelan-dhanaseelan-7949a22a2"
          className="contact-card linkedin-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon linkedin-anim">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
          </span>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">dhanaseelan-dhanaseelan</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;