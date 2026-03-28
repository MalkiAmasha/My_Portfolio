import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './FeaturedProjects.css';

function ProjectRow({ title, description, image, slug, reverse }) {
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
          <Link to={`/projects/${slug}`} className="project-see-more">
            See More &rarr;
          </Link>
        </div>
      </div>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      {projects.map((p, i) => (
        <ProjectRow
          key={i}
          title={p.shortTitle}
          description={p.description}
          image={p.image}
          slug={p.slug}
          reverse={p.reverse}
        />
      ))}
      <div className="projects-view-all">
        <Link to="/projects" className="view-all-btn">
          View All Projects &rarr;
        </Link>
      </div>
    </section>
  );
}
