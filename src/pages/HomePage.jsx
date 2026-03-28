import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <TechStack />
      <FeaturedProjects />
      <Blog />
      <Contact />
    </>
  );
}
