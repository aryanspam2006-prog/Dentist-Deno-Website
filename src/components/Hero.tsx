import { motion, type Variants } from 'motion/react';
import { openBooking } from '../lib/booking';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 }
  })
};

const wordStagger: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 }
  })
};

const reviewerAvatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
];

export function Hero() {
  const h1Words = ['Experience', 'Comfortable', 'Dental', 'Care.'];

  // Phones: exactly one screen tall (svh = visible area while browser toolbars are showing)
  return (
    <section className="min-h-svh md:min-h-[95vh] relative overflow-hidden flex items-end pt-24 md:pt-32 pb-5 md:pb-20">
      {/* Background photo */}
      <img 
        src="/pexels-olly-3945607.jpg" 
        alt="Dental patient smiling" 
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0 scale-105 animate-[ken-burns_20s_ease-out_forwards]"
        style={{ transformOrigin: 'top center' }}
      />

      {/* Gradient overlay - Photographic and natural left-fade */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to right, rgba(8, 12, 18, 0.88) 0%, rgba(8, 12, 18, 0.65) 45%, rgba(8, 12, 18, 0.15) 75%, rgba(8, 12, 18, 0) 100%),
            linear-gradient(to top, var(--color-background) 0%, transparent 15%)
          `
        }}
      />

      {/* Phones: text spans the full width, so darken from the bottom up for legibility */}
      <div className="md:hidden absolute inset-0 z-0 bg-gradient-to-t from-[rgba(8,12,18,0.92)] via-[rgba(8,12,18,0.5)] via-55% to-[rgba(8,12,18,0.1)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-[60px] flex flex-col justify-end h-full">
        
        {/* Badge - Eyebrow label style */}
        <motion.div 
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 mb-4 md:mb-6"
        >
          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
          <span className="font-sans font-semibold text-[0.62rem] tracking-[0.22em] text-white/85 uppercase">
            Best Dental Care · Portland, OR
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="font-sans font-bold text-[clamp(2rem,10vw,4.6rem)] md:text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[1.08] tracking-[-0.01em] text-white max-w-[650px] mb-4 md:mb-7 flex flex-wrap gap-x-2 md:gap-x-3">
          {h1Words.map((word, i) => (
            <motion.span 
              key={i}
              custom={i + 1}
              variants={wordStagger}
              initial="hidden"
              animate="visible"
              className={i === h1Words.length - 1 ? 'text-primary' : 'text-white'}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p 
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="font-sans font-normal text-[0.9rem] md:text-[0.95rem] text-white/90 leading-[1.65] md:leading-[1.85] max-w-full md:max-w-[460px] mb-6 md:mb-11"
        >
          Your family's dental health, handled with care. Modern technology, gentle hands, and transparent pricing — always.
        </motion.p>

        {/* CTA row */}
        <motion.div 
          custom={6.5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex gap-3 sm:gap-4 md:gap-6 items-center mb-6 md:mb-16"
        >
          <button
            onClick={openBooking}
            className="flex-1 sm:flex-none inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full font-semibold text-[0.85rem] transition-all duration-300 bg-primary text-white hover:bg-[#0aa6a6] px-9 py-3.5 md:py-3.5 shadow-[0_4px_14px_rgba(11,184,184,0.3)] hover:shadow-[0_6px_20px_rgba(11,184,184,0.4)] hover:-translate-y-[1px] active:scale-[0.98] group">
            Book Appointment <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
          </button>
          {/* Phones: round call button beside "Book"; larger screens: icon + number */}
          <a href="tel:8005592648" aria-label="Call (800) 559-2648" className="inline-flex items-center justify-center gap-2.5 font-sans font-normal text-[0.85rem] text-white/65 hover:text-white transition-colors group shrink-0">
            <span className="w-12 h-12 sm:w-8 sm:h-8 rounded-full border border-white/25 sm:border-white/15 bg-white/5 sm:bg-transparent text-white sm:text-current flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
              <svg className="w-[18px] h-[18px] sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </span>
            <span className="max-sm:sr-only">(800) 559-2648</span>
          </a>
        </motion.div>

        {/* Service tag pills - Clean, elegant, horizontal scroll on mobile */}
        <div className="border-t border-white/10 w-full lg:flex lg:items-center lg:justify-between lg:gap-8">
          <motion.div
            custom={8} variants={fadeUp} initial="hidden" animate="visible"
            className="flex max-md:flex-nowrap flex-wrap max-md:overflow-x-auto hide-scrollbar gap-2.5 pt-4 md:pt-6 max-md:pb-1 max-md:-mx-6 max-md:px-6"
          >
            {['Dental Checkup', 'Teeth Cleaning', 'Tooth Whitening', 'Gum Treatment', 'Implants', 'Root Canal'].map((tag, i) => (
              <div key={i} className="shrink-0 group cursor-default bg-transparent border border-white/15 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors shrink-0" />
                <span className="font-sans text-[0.72rem] font-medium text-white/70 group-hover:text-white transition-colors">
                  {tag}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Review chip (large screens) */}
          <motion.div
            custom={9} variants={fadeUp} initial="hidden" animate="visible"
            className="hidden lg:flex items-center gap-3 shrink-0 mt-6 pl-2 pr-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            <div className="flex -space-x-2">
              {reviewerAvatars.map((src) => (
                <img key={src} src={src} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white/80" />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5 font-sans font-bold text-[0.8rem] text-white">
                4.9 <span className="text-warning text-[0.7rem] tracking-[1px]">★★★★★</span>
              </div>
              <div className="font-sans text-[0.65rem] text-white/65">1,200+ happy patients</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
