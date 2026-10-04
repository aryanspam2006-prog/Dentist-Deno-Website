import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

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
          <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] tracking-[-0.02em] text-surface-dark mb-4">
            Are you looking for a dentist to give you that special smile?
          </h2>
          <p className="font-sans font-light text-[0.85rem] text-muted-foreground leading-[1.8] max-w-md mb-10">
            Dentora Clinic provides the highest quality dental care in Los Angeles with a group of experienced dentists and specialists.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-sans font-normal text-[0.82rem] text-surface-dark">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="pill-button-secondary h-11 px-8">
            Meet Our Team &rarr;
          </button>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1638202361665-27a3c7c25121?auto=format&fit=crop&q=80&w=1200" 
            alt="Dental team" 
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
