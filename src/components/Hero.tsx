import { motion, type Variants } from 'motion/react';
import { CalendarCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
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

const trustPoints = [
  { icon: ShieldCheck, title: 'Transparent pricing', sub: 'No hidden fees' },
  { icon: CalendarCheck, title: 'Same-day visits', sub: 'Book in 2 minutes' },
  { icon: HeartHandshake, title: 'Gentle care', sub: 'For all ages' }
];

export function Hero() {
  const h1Words = ['Experience', 'Comfortable', 'Dental', 'Care.'];

  // One screen tall (svh = visible area while mobile browser toolbars are showing).
  // The photo runs behind the transparent navbar; on desktop the steps card overlaps the bottom.
  return (
    <section className="min-h-svh relative overflow-hidden flex items-end pt-24 md:pt-32 pb-5 md:pb-28">
      {/* Background photo */}
      <img
        src="/pexels-olly-3945607.jpg"
        alt="Dental patient smiling"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0 scale-105 animate-[ken-burns_20s_ease-out_forwards]"
        style={{ transformOrigin: 'top center' }}
      />

      {/* Gradient overlay: left fade for the copy, top fade for the navbar, soft bottom fade to ground the trust row */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(8, 12, 18, 0.7) 0%, rgba(8, 12, 18, 0) 22%),
            linear-gradient(to top, rgba(8, 12, 18, 0.6) 0%, rgba(8, 12, 18, 0) 30%),
            linear-gradient(to right, rgba(8, 12, 18, 0.88) 0%, rgba(8, 12, 18, 0.65) 45%, rgba(8, 12, 18, 0.15) 75%, rgba(8, 12, 18, 0) 100%)
          `
        }}
      />

      {/* Phones: text spans the full width, so darken from the bottom up for legibility */}
      <div className="md:hidden absolute inset-0 z-0 bg-gradient-to-t from-[rgba(8,12,18,0.92)] via-[rgba(8,12,18,0.5)] via-55% to-[rgba(8,12,18,0.1)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-[60px] flex flex-col justify-end h-full">

        {/* Eyebrow pill */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="self-start inline-flex items-center gap-2.5 mb-4 md:mb-6 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md pl-3 pr-4 py-1.5"
        >
          <span className="relative flex w-1.5 h-1.5 shrink-0">
            <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
          <span className="font-sans font-semibold text-[0.6rem] md:text-[0.62rem] tracking-[0.2em] text-white/90 uppercase">
            Best Dental Care · Portland, OR
          </span>
        </motion.div>

        {/* H1 — last word set in an italic serif for contrast */}
        <h1 className="font-sans font-bold text-[clamp(2rem,10vw,4.6rem)] md:text-[clamp(2.5rem,min(5.5vw,9vh),4.8rem)] leading-[1.08] tracking-[-0.015em] text-white max-w-[8.6em] mb-4 md:mb-7 flex flex-wrap items-baseline gap-x-2 md:gap-x-3">
          {h1Words.map((word, i) => {
            const isAccent = i === h1Words.length - 1;
            return (
              <motion.span
                key={i}
                custom={i + 1}
                variants={wordStagger}
                initial="hidden"
                animate="visible"
                className={isAccent ? 'font-serif italic font-normal text-[1.18em] leading-[0.9] tracking-normal text-primary' : 'text-white'}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* Subline */}
        <motion.p
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="font-sans font-normal text-[0.9rem] md:text-[1rem] text-white/85 leading-[1.65] md:leading-[1.8] max-w-full md:max-w-[480px] mb-6 md:mb-10"
        >
          Your family's dental health, handled with care. Modern technology, gentle hands, and transparent pricing — always.
        </motion.p>

        {/* CTA row */}
        <motion.div
          custom={6.5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex gap-3 sm:gap-4 md:gap-6 items-center mb-6 md:mb-14"
        >
          <button
            onClick={openBooking}
            className="flex-1 sm:flex-none inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full font-semibold text-[0.85rem] md:text-[0.9rem] transition-all duration-300 bg-primary text-white hover:bg-[#0aa6a6] px-9 md:px-10 py-3.5 md:py-4 shadow-[0_4px_14px_rgba(11,184,184,0.3)] hover:shadow-[0_6px_20px_rgba(11,184,184,0.4)] hover:-translate-y-[1px] active:scale-[0.98] group">
            Book Appointment <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
          </button>
          {/* Phones: round call button beside "Book"; larger screens: icon + number */}
          <a href="tel:8005592648" aria-label="Call (800) 559-2648" className="inline-flex items-center justify-center gap-3 font-sans font-medium text-[0.85rem] md:text-[0.9rem] text-white/75 hover:text-white transition-colors group shrink-0">
            <span className="w-12 h-12 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/40 transition-colors shrink-0">
              <svg className="w-[18px] h-[18px] sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </span>
            <span className="max-sm:sr-only">(800) 559-2648</span>
          </a>
        </motion.div>

        {/* Trust row + reviews */}
        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate="visible"
          className="border-t border-white/10 w-full pt-4 md:pt-6 flex items-center justify-between gap-8"
        >
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {trustPoints.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-[18px] h-[18px]" />
                </span>
                <span className="leading-tight">
                  <span className="block font-sans font-semibold text-[0.8rem] text-white">{title}</span>
                  <span className="block font-sans text-[0.7rem] text-white/55 mt-0.5">{sub}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Review chip: phones and large screens */}
          <div className="flex md:hidden lg:flex items-center gap-3 shrink-0 pl-2 pr-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
