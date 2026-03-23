import './LogoShowcase.css';

export default function LogoShowcase() {
  return (
    <section className="logo-showcase">
      <div className="logo-showcase-inner">
        <div className="logo-glow" />
        <img src="/images/mylogo.png" alt="Logo" className="logo-big" />
        <div className="showcase-ring" />
        <div className="showcase-ring ring-2" />
        <span className="deco-code top-right">&lt; &gt;</span>
        <span className="deco-dot dot-1" />
        <span className="deco-dot dot-2" />
      </div>
    </section>
  );
}
