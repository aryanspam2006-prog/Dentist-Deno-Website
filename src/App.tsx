import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressSteps } from './components/ProgressSteps';
import { AboutStats } from './components/AboutStats';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { PhotoCTA } from './components/PhotoCTA';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        <Hero />
        <ProgressSteps />
        <AboutStats />
        <ServicesGrid />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <PhotoCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
