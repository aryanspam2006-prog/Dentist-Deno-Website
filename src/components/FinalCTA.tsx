import { motion } from 'motion/react';
import { openBooking } from '../lib/booking';
import { Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="book-cta" className="relative overflow-hidden bg-primary py-16 md:py-20 px-6 md:px-[60px]">
      {/* Dot texture and soft light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-white/15 blur-[100px]" />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-balance font-sans font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] text-white leading-tight">
            Your healthiest smile starts today.
          </h2>
          <p className="font-sans font-light text-[0.92rem] text-white/70 mt-5 leading-relaxed">
            Request a consultation in under 2 minutes. Same-day appointments available. Transparent pricing, no surprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
            <button 
              onClick={openBooking}
              className="w-full sm:w-auto bg-white text-primary inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-[100px] h-12 px-10 font-semibold text-[0.82rem] hover:bg-white/90 transition-colors">
              Book Consultation
            </button>
            <a href="tel:8005592648" className="w-full sm:w-auto border border-white/35 text-white inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-[100px] h-12 px-8 font-normal text-[0.82rem] hover:bg-white/10 transition-colors">
              <Phone size={16} />
              (800) 559-2648
            </a>
          </div>

          <div className="flex justify-center gap-x-5 gap-y-2 md:gap-8 flex-wrap mt-7 md:mt-8">
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ No waiting list</span>
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ Transparent pricing</span>
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ All ages welcome</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
