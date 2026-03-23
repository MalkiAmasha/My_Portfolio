import './TechStack.css';

const categories = [
  {
    title: 'Data Analytics',
    items: ['SQL', 'MySQL', 'Excel', 'Data Visualization', 'KPI Analysis'],
  },
  {
    title: 'Programming & Tools',
    items: ['Python', 'R', 'React', 'Node.js', 'Next.js', 'Git & GitHub'],
  },
  {
    title: 'AI & Automation',
    items: ['n8n', 'FlowiseAI', 'LangChain', 'RAG Applications', 'Tesseract OCR'],
  },
  {
    title: 'Business & Operations',
    items: ['Process Automation', 'Workflow Optimization', 'Business Intelligence'],
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
