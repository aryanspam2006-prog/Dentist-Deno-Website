import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-[60px] md:py-5 flex justify-between items-center transition-all duration-300 bg-surface-dark border-b border-white/10 shadow-sm">
        {/* Left — Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-primary-light">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zM12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
            </svg>
          </div>
          <span className="font-sans font-bold text-[1.05rem] tracking-[0.05em] text-white">
            DENTORA
          </span>
        </div>

        {/* Center (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'About Us', 'Testimonials', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative font-sans font-medium text-[0.75rem] text-white/80 hover:text-white transition-colors tracking-wide py-2 group">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-8">
          <a href="tel:8005592648" className="font-sans font-medium text-[0.75rem] text-white/80 hover:text-white transition-colors tracking-wide">
            (800) 559-2648
          </a>
          <button 
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' })}
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full font-medium text-[0.75rem] transition-all bg-white text-surface-dark hover:bg-primary hover:text-white px-6 py-2.5 shadow-sm hover:shadow-md">
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/90 p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface-dark flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            {['Services', 'About Us', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-2xl text-white hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-8">
              <a href="tel:8005592648" className="font-sans font-medium text-lg text-white/60">
                (800) 559-2648
              </a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' });
                }}
                className="pill-button-primary h-12 px-8 text-sm w-full">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
