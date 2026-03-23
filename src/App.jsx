import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import TeamSection from './components/TeamSection';
import FeaturedProjects from './components/FeaturedProjects';
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
        <TeamSection />
        <FeaturedProjects />
        <Contact />
      </main>
    </>
  );
}
