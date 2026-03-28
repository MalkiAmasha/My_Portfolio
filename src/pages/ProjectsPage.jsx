import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section className="section projects-list-page">
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="section-title">All Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <Link to={`/projects/${p.slug}`} key={p.slug} className="project-card">
            <div className="project-card-image">
              <img src={p.image} alt={p.shortTitle} />
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">{p.shortTitle}</h3>
              <p className="project-card-desc">{p.description}</p>
              <div className="project-card-tech">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <span className="project-card-link">View Details &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
