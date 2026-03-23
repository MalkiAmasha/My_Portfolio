import { useRef, useEffect } from 'react';
import './FeaturedProjects.css';

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
    title: 'Example Project',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/images/coding.gif',
    reverse: false,
  },
  {
    title: 'Example Project',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/images/coding.gif',
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
