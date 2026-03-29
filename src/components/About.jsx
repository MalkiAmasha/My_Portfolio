import './About.css';

const base = import.meta.env.BASE_URL;

const dataAnalytics = [
  'SQL (MySQL)',
  'Excel (Dashboards & KPI Analysis)',
  'Data Visualization',
  'Business Insights',
];

const mlAi = [
  'Scikit-learn, XGBoost, LightGBM',
  'CNN (Computer Vision)',
  'NLP (Conversational AI & RAG)',
  'Model Evaluation (ROC-AUC, F1)',
  'SMOTE & SHAP',
];

const fullStack = [
  'React',
  'Node.js',
  'MySQL',
  'API Integration',
];

const aiAutomation = [
  'n8n',
  'FlowiseAI & LangChain',
  'RAG Applications',
  'AI Chatbots',
];

const computerVision = [
  'Tesseract.js OCR',
  'Image Processing (Sharp)',
  'Identity Verification',
];

const businessOps = [
  'KPI Tracking',
  'Business Intelligence',
  'Process Automation',
  'Workflow Optimization',
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      {/* Main about grid */}
      <div className="about-grid">
        {/* Left — photo + bio */}
        <div className="about-left">
          <div className="about-photo-wrap">
            <img src={`${base}images/my_pic.jpeg`} alt="Malki Amasha" className="about-photo" />
          </div>
          <div className="about-bio">
            <h3 className="about-name">MALKI AMASHA</h3>
            <p className="about-role">Data Analyst</p>
            <p className="about-company">BSc (Hons) in Data Science, 2025</p>
            <p className="about-desc">
              Business Data Analyst with hands-on experience in data analytics,
              AI-driven automation, and business intelligence systems. Passionate
              about applying AI, automation, and analytics to optimize business
              operations and decision-making.
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
              <div className="skill-group">
                <h4>Data Analytics & BI</h4>
                <ul>
                  {dataAnalytics.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h4>MACHINE LEARNING &amp; DEEP LEARNING</h4>
                <ul>
                  {mlAi.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h4>FULL-STACK DEVELOPMENT</h4>
                <ul>
                  {fullStack.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="skill-col-right">
              <div className="skill-group">
                <h4>AI Systems &amp; AUTOMATION</h4>
                <ul>
                  {aiAutomation.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h4>OCR &amp; COMPUTER VISION</h4>
                <ul>
                  {computerVision.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h4>BUSINESS &amp; BI</h4>
                <ul>
                  {businessOps.map((s, i) => (
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
        <img src={`${base}images/QR.png`} alt="QR Code" className="about-qr" />
        <div className="about-qr-text">
          <span>Check my</span>
          <strong>LinkedIn profile</strong>
        </div>
      </div>
    </section>
  );
}
