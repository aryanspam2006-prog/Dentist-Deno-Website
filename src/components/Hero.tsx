import { motion } from 'motion/react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 }
  })
};

const wordStagger: any = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 }
  })
};

export function Hero() {
  const h1Words = ['Experience', 'Comfortable', 'Dental', 'Care.'];

  return (
    <section className="min-h-[95vh] relative overflow-hidden flex items-end pt-32 pb-12 md:pb-20">
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
            linear-gradient(to top, hsl(var(--color-background)) 0%, transparent 15%)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-[60px] flex flex-col justify-end h-full">
        
        {/* Badge - Eyebrow label style */}
        <motion.div 
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 mb-5 md:mb-6"
        >
          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
          <span className="font-sans font-semibold text-[0.62rem] tracking-[0.22em] text-white/85 uppercase">
            Best Dental Care · Portland, OR
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="font-sans font-bold text-[clamp(2rem,11vw,4.6rem)] md:text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[1.08] tracking-[-0.01em] text-white max-w-[650px] mb-6 md:mb-7 flex flex-wrap gap-x-2 md:gap-x-3">
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
          className="font-sans font-normal text-[0.95rem] text-white/90 leading-[1.7] md:leading-[1.85] max-w-full md:max-w-[460px] mb-8 md:mb-11"
        >
          Your family's dental health, handled with care. Modern technology, gentle hands, and transparent pricing — always.
        </motion.p>

        {/* CTA row */}
        <motion.div 
          custom={6.5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center mb-10 md:mb-16"
        >
          <button 
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' })}
            className="w-full sm:w-auto inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full font-semibold text-[0.85rem] transition-all duration-300 bg-primary text-white hover:bg-[#0aa6a6] px-9 py-3.5 md:py-3.5 shadow-[0_4px_14px_rgba(11,184,184,0.3)] hover:shadow-[0_6px_20px_rgba(11,184,184,0.4)] hover:-translate-y-[1px]">
            Book Appointment &rarr;
          </button>
          <a href="tel:8005592648" className="inline-flex items-center justify-center gap-2.5 font-sans font-normal text-[0.85rem] text-white/65 hover:text-white transition-colors group">
            <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </span>
            (800) 559-2648
          </a>
        </motion.div>

        {/* Service tag pills - Clean, elegant, horizontal scroll on mobile */}
        <div className="border-t border-white/10 w-full">
          <motion.div 
            custom={8} variants={fadeUp} initial="hidden" animate="visible"
            className="flex max-md:flex-nowrap flex-wrap max-md:overflow-x-auto hide-scrollbar gap-2.5 pt-5 md:pt-6 max-md:pb-2 max-md:-mx-6 max-md:px-6"
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
        </div>

      </div>
    </section>
  );
}
