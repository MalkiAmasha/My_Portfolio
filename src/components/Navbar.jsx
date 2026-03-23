import './Navbar.css';

export default function Navbar() {
  return (
    <header className="topnav">
      <span className="nav-brand">Malki Amasha - Data Analyst</span>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#career">Career History</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
