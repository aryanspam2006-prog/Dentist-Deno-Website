import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedCounter({ end, duration = 1400 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const cubicBezier = (t: number) => {
      // easeOutCubic
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const progressNormalized = Math.min(progress / duration, 1);
      
      const easedProgress = cubicBezier(progressNormalized);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

function DecimalCounter({ end, duration = 1400 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const progressNormalized = Math.min(progress / duration, 1);
      
      const currentCount = progressNormalized * end;
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toFixed(1)}</span>;
}

export function AboutStats() {
  return (
    <section id="about-us" className="bg-white py-12 md:py-20 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase mb-12">
            ABOUT US
          </h3>
          
          <p className="max-w-[760px] mb-14 font-sans font-bold text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.3] tracking-[-0.02em] text-surface-dark">
            We deliver <span className="text-primary">personalized dental treatments</span> with modern technology and gentle care ensuring healthy confident smiles for every patient.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col md:flex-row md:items-center gap-10 py-8 border-t border-b border-border mb-10"
        >
          <p className="font-sans font-light text-[0.68rem] text-muted-foreground max-w-[130px] leading-[1.6]">
            Thousands trust us for smiles!
          </p>

          <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-12">
            <div>
              <div className="font-sans font-extrabold text-[2.8rem] tracking-[-0.03em] leading-[1]">
                <AnimatedCounter end={98} />%
              </div>
              <div className="font-sans font-normal text-[0.7rem] text-muted-foreground mt-1">Satisfaction Rate</div>
            </div>
            
            <div>
              <div className="font-sans font-extrabold text-[2.8rem] tracking-[-0.03em] leading-[1]">
                <AnimatedCounter end={2} />k+
              </div>
              <div className="font-sans font-normal text-[0.7rem] text-muted-foreground mt-1">Smiles Transformed</div>
            </div>
            
            <div>
              <div className="font-sans font-extrabold text-[2.8rem] tracking-[-0.03em] leading-[1] flex items-center">
                <DecimalCounter end={4.9} />
                <span className="text-primary text-3xl ml-1">★</span>
              </div>
              <div className="font-sans font-normal text-[0.7rem] text-muted-foreground mt-1">Customer Rating</div>
            </div>
          </div>

          <div className="relative md:ml-auto w-full md:w-[210px] h-[160px] rounded-2xl overflow-hidden mt-6 md:mt-0 shrink-0 group cursor-default">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" 
              alt="Modern dental clinic"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mt-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" 
            alt="Dr. Daniel Carter" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-sans font-bold text-[0.9rem] text-surface-dark">Dr. Daniel Carter</h4>
            <p className="font-sans font-normal text-[0.72rem] text-muted-foreground mt-1">
              Lead Dental Specialist · <span className="text-warning">★</span> 4.9 (40+ reviews)
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
