import { useRef, useEffect } from 'react';
import './FeaturedProjects.css';

const base = import.meta.env.BASE_URL;

function ProjectRow({ title, description, image, reverse }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`project-row ${reverse ? 'reverse' : ''}`} ref={ref}>
      <div className="project-text">
        <span className="project-label">Featured Project</span>
        <h3 className="project-name">{title}</h3>
        <div className="project-desc">
          <p>{description}</p>
        </div>
        <div className="project-links">
          <a href="#" className="project-link-icon" aria-label="External link">&#10038;</a>
          <a href="#" className="project-link-icon" aria-label="GitHub">&#10038;</a>
        </div>
      </div>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Fraud Detection in Credit Card Transactions',
    description:
      'Developed a machine learning fraud detection system using XGBoost, Random Forest, LightGBM, and more. Applied SMOTE resampling and SHAP for model explainability. Integrated the final model into a web interface using Python, Next.js, and a custom API for real-time predictions.',
    image: `${base}images/coding.gif`,
    reverse: false,
  },
  {
    title: 'Conversational BI Chatbot',
    description:
      'Built a Sinhala–English AI chatbot for querying business data using natural language. Developed with FlowiseAI, LangChain, and Google AI embeddings. Enables real-time data querying from CSV and PDF datasets, providing instant responses to analytical questions.',
    image: `${base}images/coding.gif`,
    reverse: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      {projects.map((p, i) => (
        <ProjectRow key={i} {...p} />
      ))}
    </section>
  );
}
