import './TechStack.css';

const categories = [
  {
    title: 'Data & BI',
    items: ['MySQL', 'Excel', 'KPI Analysis', 'Dashboard Reporting', 'User Segmentation', 'Revenue Analysis'],
  },
  {
    title: 'AI & ML',
    items: ['Machine Learning', 'XGBoost', 'LightGBM', 'SHAP', 'RAG Applications', 'FlowiseAI'],
  },
  {
    title: 'Automation & Backend',
    items: ['n8n', 'Node.js', 'API Integration', 'Tesseract.js OCR', 'Process Automation', 'Workflow Design'],
  },
  {
    title: 'Frontend & Tools',
    items: ['React', 'Next.js', 'Git & GitHub', 'Python', 'R'],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="ts-grid">
        {categories.map((cat, i) => (
          <div className="ts-card" key={i}>
            <h3 className="ts-cat-title">{cat.title}</h3>
            <div className="ts-tags">
              {cat.items.map((item, j) => (
                <span className="ts-tag" key={j}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
