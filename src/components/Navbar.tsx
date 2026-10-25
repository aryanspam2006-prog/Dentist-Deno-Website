import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock, Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { cn } from '../lib/utils';
import { openBooking, PHONE_HREF } from '../lib/booking';

const navItems = ['Services', 'About Us', 'Testimonials', 'Contact'];
const toId = (item: string) => item.toLowerCase().replace(' ', '-');

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Highlight the nav link for the section currently in the middle of the viewport
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(toId(item)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
          else setActiveId((current) => (current === entry.target.id ? null : current));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-[60px] flex justify-between items-center transition-all duration-300 border-b",
        // Transparent over the hero photo at the top; solid once scrolled or when the menu is open
        isScrolled || isOpen
          ? "md:py-3.5 bg-surface-dark border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
          : "md:py-6 bg-transparent border-transparent"
      )}>
        {/* Scroll progress */}
        <motion.div
          className="absolute left-0 right-0 -bottom-px h-[2px] bg-primary origin-left"
          style={{ scaleX: progress }}
        />
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
          {navItems.map((item) => {
            const isActive = activeId === toId(item);
            return (
              <a
                key={item}
                href={`#${toId(item)}`}
                className={cn(
                  "relative font-sans font-medium text-[0.75rem] hover:text-white transition-colors tracking-wide py-2 group",
                  isActive ? "text-white" : "text-white/80"
                )}
              >
                {item}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1.5px] bg-primary group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out",
                  isActive ? "scale-x-100" : "scale-x-0"
                )} />
              </a>
            );
          })}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-8">
          <a href="tel:8005592648" className="font-sans font-medium text-[0.75rem] text-white/80 hover:text-white transition-colors tracking-wide">
            (800) 559-2648
          </a>
          <button 
            onClick={openBooking}
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full font-medium text-[0.75rem] transition-all bg-white text-surface-dark hover:bg-primary hover:text-white px-6 py-2.5 shadow-sm hover:shadow-md">
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/90 w-10 h-10 -mr-2 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-surface-dark md:hidden flex flex-col px-6 pt-24 pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-primary/20 blur-[90px]" />

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              className="relative flex flex-col"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  className="border-b border-white/10"
                >
                  <a
                    href={`#${toId(item)}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-5 group"
                  >
                    <span className="font-sans font-semibold text-[0.7rem] tracking-[0.15em] text-primary w-6">
                      0{index + 1}
                    </span>
                    <span className="flex-1 font-sans font-semibold text-[1.6rem] tracking-[-0.01em] text-white group-active:text-primary transition-colors">
                      {item}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-active:text-primary transition-colors" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="relative mt-auto pt-10"
            >
              <p className="font-sans text-[0.75rem] text-white/45 mb-4 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Mon–Fri 8am–7pm · Sat 9am–5pm
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a href={PHONE_HREF} className="pill-button-ghost h-12 text-[0.85rem]">
                  <Phone size={16} />
                  Call us
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                  className="pill-button-primary h-12 text-[0.85rem]">
                  Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
