import './Hero.css';

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-photo-col">
          <div className="photo-frame">
            <div className="avatar-glow" />
            <img src={`${base}images/image1.png`} alt="My photo" loading="lazy" />
          </div>
          <div className="photo-caption">
            <span className="caption-text">
              Hello! I Am <strong>Malki Amasha</strong>
            </span>
            <img src={`${base}images/Arrow.png`} alt="Arrow" className="caption-arrow" />
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-job">A Data Analyst who</span>
          <h1 className="hero-title">
            turns data<br />
            into{' '}
            <span className="highlight">
              <img src={`${base}images/Ellipse.png`} alt="" className="ellipse-bg" />
              <span className="cover-text">decisions</span>
            </span>
            ...
          </h1><br>
          <p className="hero-subtitle">
            Because if data doesn’t drive decisions, what will?
          </p></br>
        </div>
      </div>

      <div className="hero-intro">
        <h2 className="hero-heading">I'm a Data Analyst</h2>
        <p className="hero-line">
          Currently, I'm a Trainee Business Analyst at{' '}
          <img src={`${base}images/companylogo.webp`} alt="Neuball" className="company-logo" />{' '}
          <a href="https://neuball.com/" target="_blank" rel="noreferrer">
            Neuball
          </a>
          
        </p>
        <p className="intro">
         Data Analyst & AI enthusiast with experience in building analytics dashboards, 
          automation systems, and AI-powered chatbots. I enjoy transforming complex data into actionable 
          insights and developing solutions that bridge the gap between business needs and technology.
        </p>
      </div>
    </section>
  );
}
