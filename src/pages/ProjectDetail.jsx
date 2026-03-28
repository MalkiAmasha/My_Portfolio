import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import projects from '../data/projects';
import './ProjectDetail.css';

function Section({ title, children }) {
  if (!children) return null;
  return (
    <div className="detail-section">
      <h2 className="detail-subtitle">{title}</h2>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="detail-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="section project-detail-page">
        <Link to="/projects" className="back-link">&larr; Back to Projects</Link>
        <h1 className="section-title">Project not found</h1>
      </section>
    );
  }

  return (
    <section className="section project-detail-page">
      <Link to="/projects" className="back-link">&larr; Back to Projects</Link>

      <h1 className="detail-title">{project.title}</h1>
      <p className="detail-tagline">A Complete Project Overview</p>

      <div className="detail-tech-list">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      {/* Introduction */}
      {project.introduction && (
        <Section title="Introduction">
          {project.introduction.split('\n\n').map((p, i) => (
            <p key={i} className="detail-para">{p}</p>
          ))}
        </Section>
      )}

      {/* Goals */}
      {project.goals && project.goals.length > 0 && (
        <Section title="Project Goals & Purpose">
          <BulletList items={project.goals} />
        </Section>
      )}

      {/* Core Concept */}
      {project.coreConcept && (
        <Section title="Core Concept">
          {project.coreConcept.split('\n\n').map((p, i) => (
            <p key={i} className="detail-para">{p}</p>
          ))}
        </Section>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <Section title="Tech Stack">
          <div className="tech-stack-grid">
            {Object.entries(project.techStack).map(([key, items]) => {
              const labels = {
                languages: 'Programming Languages',
                mlModels: 'Machine Learning Models',
                dataLibraries: 'Data Processing & ML Libraries',
                webDev: 'Web Development',
                tools: 'Other Tools',
              };
              return (
                <div key={key} className="tech-stack-card">
                  <h4 className="tech-stack-label">{labels[key] || key}</h4>
                  <ul>
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* System Architecture */}
      {project.architecture && project.architecture.length > 0 && (
        <Section title="System Architecture">
          <div className="architecture-layers">
            {project.architecture.map((a, i) => (
              <div key={i} className="arch-layer">
                <div className="arch-layer-num">{i + 1}</div>
                <div>
                  <h4 className="arch-layer-title">{a.layer}</h4>
                  <p className="arch-layer-detail">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Methodology */}
      {project.methodology && project.methodology.length > 0 && (
        <Section title="Methodology & Approach">
          <div className="methodology-phases">
            {project.methodology.map((m, i) => (
              <div key={i} className="method-phase">
                <h4 className="method-phase-title">{m.phase}</h4>
                <ul>
                  {m.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <Section title="Key Features">
          <div className="features-grid">
            {project.features.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-check">&#10003;</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <Section title="Challenges Faced">
          <BulletList items={project.challenges} />
        </Section>
      )}

      {/* Achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <Section title="Key Achievements">
          <BulletList items={project.achievements} />
        </Section>
      )}

      {/* UI Design Gallery */}
      {project.images && project.images.length > 0 && (
        <Section title="UI Design">
          <div className="gallery-grid">
            {project.images.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img} alt={`${project.title} UI Design ${i + 1}`} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Future Improvements */}
      {project.futureImprovements && project.futureImprovements.length > 0 && (
        <Section title="Future Improvements">
          <BulletList items={project.futureImprovements} />
        </Section>
      )}

      {/* Conclusion */}
      {project.conclusion && (
        <Section title="Conclusion">
          {project.conclusion.split('\n\n').map((p, i) => (
            <p key={i} className="detail-para">{p}</p>
          ))}
        </Section>
      )}
    </section>
  );
}
