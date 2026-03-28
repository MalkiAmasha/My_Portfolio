import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="topnav">
      <Link to="/" className="nav-brand" onClick={() => { setMenuOpen(false); }}>
        Malki Amasha - Data Analyst
      </Link>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('career')}>Career History</button>
        <button onClick={() => scrollTo('techstack')}>Tech Stack</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('blog')}>Blog</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </nav>
    </header>
  );
}
