import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-photo-col">
          <div className="photo-frame">
            <div className="avatar-glow" />
            <img src="/images/image1.png" alt="My photo" loading="lazy" />
          </div>
          <div className="photo-caption">
            <span className="caption-text">
              Hello! I Am <strong>Malki Amasha</strong>
            </span>
            <img src="/images/Arrow.png" alt="Arrow" className="caption-arrow" />
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-job">A Designer who</span>
          <h1 className="hero-title">
            Judges a book<br />
            by its{' '}
            <span className="highlight">
              <img src="/images/Ellipse.png" alt="" className="ellipse-bg" />
              <span className="cover-text">cover</span>
            </span>
            ...
          </h1>
          <p className="hero-subtitle">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>

      <div className="hero-intro">
        <h2 className="hero-heading">I'm a Data Analyst.|</h2>
        <p className="hero-line">
          Currently, I'm a Trainee Business Analyst at{' '}
          <span className="fb-icon">&#9679;</span>{' '}
          <a href="https://neuball.com/" target="_blank" rel="noreferrer">
            Neuball
          </a>
          .
        </p>
        <p className="intro">
          A self-taught Data Analyst, functioning in the industry for 3+ years
          now.
          <br />I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </div>
    </section>
  );
}
