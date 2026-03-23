import { useRef, useEffect } from 'react';
import './WorkExperience.css';

const experiences = [
  {
    title: 'CIB on the Mobile',
    desc: 'Take your Client onboard seamlessly by our trending set of digital onboard processes.',
    img: '/images/image1.png',
  },
  {
    title: 'CIB on the Mobile',
    desc: 'Take your Client onboard seamlessly by our trending set of digital onboard processes.',
    img: '/images/image1.png',
  },
  {
    title: 'CIB on the Mobile',
    desc: 'Take your Client onboard seamlessly by our trending set of digital onboard processes.',
    img: '/images/image1.png',
  },
  {
    title: 'CIB on the Mobile',
    desc: 'Take your Client onboard seamlessly by our trending set of digital onboard processes.',
    img: '/images/image1.png',
  },
];

function ExpCard({ title, desc, img }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="exp-card" ref={ref}>
      <div className="exp-card-inner">
        <div className="exp-icon">
          <img src={img} alt={title} />
        </div>
        <div className="exp-info">
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href="#" className="exp-btn">LEARN MORE</a>
        </div>
      </div>
      <div className="exp-dots" />
    </article>
  );
}

export default function WorkExperience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="exp-grid">
        {experiences.map((exp, i) => (
          <ExpCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}
