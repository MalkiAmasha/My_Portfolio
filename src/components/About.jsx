import './About.css';

const hardSkills = [
  'Customer development (MVP, MMP, MLP)',
  'User flow & User persona, CJM, UJM',
  'Generating a hypothesis, HADI cycle',
  'Design Systems, UI Kit (Material Design, HIG)',
  'Typography, colour & composition',
  'Design thinking methodology',
  'Competitor analysis',
  'JTBD framework',
  'Responsive design',
  'Atomic design',
  'Prototyping',
  'Animating',
];

const softSkills = [
  'Communicative',
  'Self-organised',
  'Responsible',
  'Multitasking',
  'Teamplayer',
  'Fast learner',
];

const tools = [
  'Figma',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe After Effect',
  'Protopie',
  'Canva',
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      {/* Main about grid */}
      <div className="about-grid">
        {/* Left — photo + bio */}
        <div className="about-left">
          <div className="about-photo-wrap">
            <img src="/images/my_pic.jpeg" alt="Malki Amasha" className="about-photo" />
          </div>
          <div className="about-bio">
            <h3 className="about-name">MALKI AMASHA</h3>
            <p className="about-role">Data Analyst</p>
            <p className="about-company">BSc (Hons) in Data Science, 2025</p>
            <p className="about-desc">
              Once I became a Data Analyst I felt that this is my true place.
              I would love to bring my knowledge of designing and copywriting
              into new IT products
            </p>
            <p className="about-location">
              <span className="location-pin">&#9679;</span> Kadawatha, Sri Lanka
            </p>
          </div>
        </div>

        {/* Center — vertical ABOUT ME */}
        <div className="about-center">
          <span>ABOUT ME</span>
        </div>

        {/* Right — skills */}
        <div className="about-right">
          <div className="skills-columns">
            <div className="skill-col">
              <h4>HARD SKILLS</h4>
              <ul>
                {hardSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="skill-col-right">
              <div className="skill-group">
                <h4>SOFT SKILLS</h4>
                <ul>
                  {softSkills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h4>TOOLS</h4>
                <ul>
                  {tools.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved intro text */}
      <div className="about-curved">
        <svg viewBox="0 0 1000 280" className="curved-svg">
          <path
            id="curvePath"
            d="M 40 250 Q 200 20, 500 200 T 980 100"
            fill="transparent"
          />
          <text fill="#d8ddf0" fontFamily="'Comfortaa', cursive" fontSize="28" letterSpacing="1">
            <textPath href="#curvePath" startOffset="0%">
              Hello! My name is Malki Amasha. I am Data Analyst based in Sri Lanka.
            </textPath>
          </text>
        </svg>
      </div>

      {/* QR / LinkedIn */}
      <div className="about-linkedin">
        <img src="/images/QR.png" alt="QR Code" className="about-qr" />
        <div className="about-qr-text">
          <span>Check my</span>
          <strong>LinkedIn profile</strong>
        </div>
      </div>
    </section>
  );
}
