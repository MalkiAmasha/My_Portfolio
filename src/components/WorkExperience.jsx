import { useRef, useEffect } from 'react';
import './WorkExperience.css';

const base = import.meta.env.BASE_URL;

const experiences = [
  {
    title: 'Trainee Business Analyst',
    company: 'Neuball',
    period: 'Aug 2025 – Present',
    desc: 'Built analytics dashboards, AI chatbots (WhatsApp & Telegram), and a full-stack KYC verification system using React, Node.js, MySQL, and n8n automation.',
    img: `${base}images/companylogo.webp`,
  },
  {
    title: 'Internship Program – TRACE T2T',
    company: 'TRACE Sri Lanka',
    period: 'Mar 2025',
    desc: 'Developed a Sinhala–English AI chatbot for querying business data using natural language with FlowiseAI, LangChain, and Google AI embeddings.',
    img: `${base}images/T2T.webp`,
  },
  {
    title: 'Data Analyst Intern',
    company: 'CodersCave',
    period: 'Aug 2024 – Sep 2024',
    desc: 'Performed exploratory and statistical data analysis on real-world datasets, delivering actionable insights through data visualization.',
    img: `${base}images/codercave.jpg`,
  },
  {
    title: 'IEEE Computer Society Student Branch Chapter of NSBM',
    company: 'NSBM Green University',
    period: 'Sep 2022 – Dec 2025',
    desc: 'Active member and development team contributor at IEEE Computer Society Student Branch Chapter of NSBM, working on React Native projects.',
    img: `${base}images/ieee_cs_vit_logo.jpg`,
  },
];

function ExpCard({ title, company, period, desc, img }) {
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
          <img src={img} alt={company} />
        </div>
        <div className="exp-info">
          <h3>{title}</h3>
          <span className="exp-company">{company}</span>
          <span className="exp-period">{period}</span>
          <p>{desc}</p>
        </div>
      </div>
      <div className="exp-dots" />
    </article>
  );
}

export default function WorkExperience() {
  return (
    <section id="career" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="exp-grid">
        {experiences.map((exp, i) => (
          <ExpCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}
