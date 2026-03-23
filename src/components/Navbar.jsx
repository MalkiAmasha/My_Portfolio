import './Navbar.css';

export default function Navbar() {
  return (
    <header className="topnav">
      <div className="logo">
        <img src="/images/mylogo.png" alt="Logo" className="logo-img" />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Lab</a>
      </nav>
    </header>
  );
}
