import { motion } from 'motion/react';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    "Dental check-ups",
    "Root canal treatment",
    "Hygiene treatments",
    "Dental implant restoration",
    "Crowns, veneers & bridges",
    "Professional tooth whitening"
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase mb-4">
            WHY CHOOSE US
          </h3>
          <h2 className="text-balance font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] tracking-[-0.02em] text-surface-dark mb-4">
            Are you looking for a dentist to give you that special smile?
          </h2>
          <p className="font-sans font-light text-[0.85rem] text-muted-foreground leading-[1.8] max-w-md mb-8 md:mb-10">
            Dentora Clinic provides the highest quality dental care in Los Angeles with a group of experienced dentists and specialists.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 md:mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans font-normal text-[0.82rem] text-surface-dark">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="pill-button-secondary h-11 px-8 group">
            Meet Our Team <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] group cursor-default"
        >
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200" 
            alt="Dental team" 
            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/5 transition-colors duration-700 pointer-events-none" />

          {/* Floating availability card */}
          <div className="flex absolute left-4 bottom-4 md:left-6 md:bottom-6 items-center gap-3 md:gap-3.5 bg-white/85 backdrop-blur-md rounded-2xl pl-2.5 pr-4 md:pl-3 md:pr-6 py-2.5 md:py-3 border border-white/60 shadow-[0_12px_40px_rgba(10,21,32,0.15)] animate-[float_5s_ease-in-out_infinite] motion-reduce:animate-none">
            <span className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
              <CalendarCheck className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2 font-sans font-bold text-[0.82rem] text-surface-dark">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-success" />
                </span>
                Accepting new patients
              </div>
              <div className="font-sans text-[0.7rem] text-muted-foreground mt-0.5">Same-day appointments available</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
