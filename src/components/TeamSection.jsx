import './TeamSection.css';

const base = import.meta.env.BASE_URL;

export default function TeamSection() {
  return (
    <section className="section team-section">
      <img src={`${base}images/Skills.png`} alt="Skills" className="skills-img" />
    </section>
  );
}
