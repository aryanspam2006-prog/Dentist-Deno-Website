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
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' })}
          className="w-full bg-primary text-white font-semibold text-[0.95rem] py-4 rounded-2xl shadow-[0_8px_30px_rgba(11,184,184,0.4)] flex justify-center items-center gap-2 transition-transform active:scale-[0.98]"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default App;
