import './Contact.css';

const base = import.meta.env.BASE_URL;

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">
        Have a project in mind or want to collaborate? Feel free to reach out —
        I'd love to connect!
      </p>
      <a href="mailto:malkiamasha0316@gmail.com" className="contact-email">
        malkiamasha0316@gmail.com
      </a>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/malki-3-ama/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
          <img src={`${base}images/linkedin.jpg`} alt="LinkedIn" className="social-logo" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/MalkiAmasha" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
          <img src={`${base}images/github.png`} alt="GitHub" className="social-logo" />
          <span>GitHub</span>
        </a>
        <a href="mailto:malkiamasha0316@gmail.com" aria-label="Gmail" className="social-link">
          <img src={`${base}images/gmail.png`} alt="Gmail" className="social-logo" />
          <span>Gmail</span>
        </a>
      </div>
    </section>
  );
}
