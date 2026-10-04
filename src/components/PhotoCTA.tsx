import { Phone } from 'lucide-react';

export function PhotoCTA() {
  return (
    <section className="relative h-auto md:h-[300px] py-16 md:py-0 overflow-hidden flex items-center group cursor-default">
      <img 
        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=2000" 
        alt="Happy dental patient" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-1000 md:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,12,20,0.90)] via-[rgba(6,12,20,0.65)] to-[rgba(6,12,20,0.15)] z-[1] transition-opacity duration-1000 md:group-hover:opacity-90" />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3.5vw,3rem)] tracking-[-0.025em] text-white">
            Ready for your best smile?
          </h2>
          <p className="font-sans font-light text-[0.88rem] text-white/60 mt-2">
            Same-day appointments available. No waiting lists.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button 
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' })}
            className="pill-button-primary h-12 px-9">
            Book Appointment
          </button>
          <a href="tel:8005592648" className="pill-button-ghost h-12 px-8">
            <Phone size={16} />
            (800) 559-2648
          </a>
        </div>
      </div>
    </section>
  );
}
