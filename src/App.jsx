import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <>
      <div className="space" />
      <Navbar />
      <main className="page">
        <Hero />
        <About />
        <WorkExperience />
        <TechStack />
        <FeaturedProjects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
