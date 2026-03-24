import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topnav">
      <span className="nav-brand">Malki Amasha - Data Analyst</span>
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
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#career" onClick={() => setMenuOpen(false)}>Career History</a>
        <a href="#techstack" onClick={() => setMenuOpen(false)}>Tech Stack</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}
