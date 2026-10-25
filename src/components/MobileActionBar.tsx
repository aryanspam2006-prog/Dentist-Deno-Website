import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { openBooking, PHONE_HREF } from '../lib/booking';

// Sticky call/book bar for phones. Appears after the hero and steps aside
// when the closing CTA or footer (which have their own buttons) are on screen.
export function MobileActionBar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPastHero(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = ['book-cta', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      setIsNearEnd(visible.size > 0);
    });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isPastHero && !isNearEnd && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          className="md:hidden fixed left-0 right-0 bottom-0 z-30 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex gap-2 p-2 rounded-[22px] bg-surface-dark/95 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(10,21,32,0.35)]">
            <a
              href={PHONE_HREF}
              aria-label="Call the clinic"
              className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 text-white flex items-center justify-center active:scale-95 transition-transform"
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>
            <button
              onClick={openBooking}
              className="flex-1 h-12 rounded-2xl bg-primary text-white font-sans font-semibold text-[0.9rem] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              Book Appointment <span aria-hidden>&rarr;</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
