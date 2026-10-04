import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Book Online",
    desc: "Fill out our quick form or call us — we'll confirm your appointment within the hour.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600"
  },
  {
    num: "02",
    title: "Welcome Visit",
    desc: "Arrive at your scheduled time, meet your dentist, and we'll go over your dental history.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600"
  },
  {
    num: "03",
    title: "Smile Assessment",
    desc: "Digital X-rays, full examination, and a transparent care plan with pricing before we start.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
  },
  {
    num: "04",
    title: "Treatment & Care",
    desc: "Treatment completed, results reviewed, aftercare explained. We follow up to make sure you're happy.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600"
  }
];

export function Process() {
  return (
    <section className="bg-surface-dark py-16 md:py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="max-w-[560px] mx-auto text-center mb-16">
          <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase">
            HOW IT WORKS
          </h3>
          <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.025em] text-white mt-3">
            Your journey to a healthier smile.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 relative"
            >
              <div className="font-sans font-extrabold text-[3rem] tracking-[-0.04em] text-white/[0.07] leading-[1] mb-5">
                {step.num}
              </div>
              <div className="h-[130px] rounded-xl overflow-hidden mb-5">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-[0.65rem] font-bold shrink-0">
                  {parseInt(step.num, 10)}
                </div>
                <h4 className="font-sans font-bold text-[0.88rem] text-white">
                  {step.title}
                </h4>
              </div>
              <p className="font-sans font-light text-[0.78rem] text-white/50 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
