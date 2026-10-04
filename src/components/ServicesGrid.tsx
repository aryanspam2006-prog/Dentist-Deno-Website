import { motion } from 'motion/react';

const services = [
  {
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    price: "FROM $80",
    title: "Dental Check-Up",
    desc: "Comprehensive examination of your teeth, gums, and jaw. Includes digital X-rays and a full treatment plan."
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    price: "FROM $120",
    title: "Teeth Cleaning",
    desc: "Professional scaling and polishing to remove plaque, tartar, and surface stains for a healthier smile."
  },
  {
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=800",
    price: "FROM $299",
    title: "Tooth Whitening",
    desc: "Professional in-office or at-home whitening to brighten your smile by up to 8 shades."
  },
  {
    image: "https://images.unsplash.com/photo-1579724124316-c70e932b7ba4?auto=format&fit=crop&q=80&w=800",
    price: "FROM $1,800",
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth — surgically placed and built to last a lifetime."
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    price: "FROM $650",
    title: "Veneers & Crowns",
    desc: "Custom-crafted porcelain shells and crowns to restore shape, color, and strength to damaged teeth."
  },
  {
    image: "https://images.unsplash.com/photo-1606214174585-f28f6ce38185?auto=format&fit=crop&q=80&w=800",
    price: "SAME DAY",
    title: "Emergency Care",
    desc: "Same-day emergency appointments for toothaches, broken teeth, lost fillings, and dental pain. Call anytime."
  }
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-surface-light py-16 md:py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase mb-3">
              FEATURE TREATMENT
            </h3>
            <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.025em] leading-[1.2] whitespace-pre-line text-surface-dark">
              {`Advanced Dental Care\nfor a Healthier Smile`}
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pill-button-secondary h-10 px-6 group"
          >
            View All Services <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border cursor-pointer transition-all duration-500 ease-out md:hover:-translate-y-[4px] md:hover:scale-[1.01] md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[170px] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 w-[34px] h-[34px] bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center font-sans font-bold text-[0.7rem] text-surface-dark shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110 group-hover:text-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-flex bg-primary-light text-primary text-[0.65rem] font-semibold tracking-[0.08em] px-3 py-1 rounded-full mb-4">
                  {service.price}
                </span>
                <h4 className="font-sans font-bold text-[1.05rem] text-surface-dark mb-2.5">
                  {service.title}
                </h4>
                <p className="font-sans font-light text-[0.82rem] text-muted-foreground leading-[1.7]">
                  {service.desc}
                </p>
                <div className="font-sans font-semibold text-[0.8rem] text-primary mt-5 inline-flex items-center transition-all">
                  Learn more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
