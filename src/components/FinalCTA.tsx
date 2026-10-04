import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-primary py-20 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-sans font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] text-white leading-tight">
            Your healthiest smile starts today.
          </h2>
          <p className="font-sans font-light text-[0.92rem] text-white/70 mt-5 leading-relaxed">
            Request a consultation in under 2 minutes. Same-day appointments available. Transparent pricing, no surprises.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <button 
              onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/aryanspam2006' })}
              className="bg-white text-primary inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-[100px] h-12 px-10 font-semibold text-[0.82rem] hover:bg-white/90 transition-colors">
              Book Consultation
            </button>
            <a href="tel:8005592648" className="border border-white/35 text-white inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-[100px] h-12 px-8 font-normal text-[0.82rem] hover:bg-white/10 transition-colors">
              <Phone size={16} />
              (800) 559-2648
            </a>
          </div>

          <div className="flex justify-center gap-8 flex-wrap mt-8">
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ No waiting list</span>
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ Transparent pricing</span>
            <span className="font-sans font-light text-[0.8rem] text-white/55">✓ All ages welcome</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
