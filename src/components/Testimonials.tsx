import { useRef } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import { useSnapIndex } from '../lib/useSnapIndex';
import { CarouselDots } from './CarouselDots';

const reviews = [
  {
    quote: "I've been going to Dentora for two years and I won't go anywhere else. They explained every step of my treatment clearly and I never felt pressured. Best dental experience I've had.",
    name: "Emily K.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "As someone who used to dread the dentist, Dentora completely changed my experience. Painless, quick, and the results were incredible. My smile has never looked better.",
    name: "Marcus T.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Brought my whole family here after a recommendation. The team is patient and gentle with my kids, which means everything. We're Dentora patients for life.",
    name: "Sarah L.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndex = useSnapIndex(trackRef);

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14"
        >
          <h3 className="font-sans font-semibold text-[0.68rem] md:text-[0.62rem] tracking-[0.2em] text-primary uppercase">
            PATIENT REVIEWS
          </h3>
          <h2 className="text-balance font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.025em] mt-3 text-surface-dark">
            Don't take our word for it.
          </h2>
          <p className="font-sans font-normal text-[0.8rem] md:text-[0.85rem] text-muted-foreground mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="text-warning text-sm tracking-[2px]">★★★★★</span>
            4.9 average from 1,200+ verified reviews
          </p>
        </motion.div>

        {/* Phones: swipeable row. Desktop: three columns. */}
        <div
          ref={trackRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scroll-px-6 max-md:-mx-6 max-md:px-6 max-md:pb-2 hide-scrollbar"
        >
          {reviews.map((review, index) => {
            // The middle card is styled as a dark "featured" review
            const featured = index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-6 md:p-7 border flex flex-col md:h-full max-md:w-[86%] max-md:shrink-0 max-md:snap-start transition-shadow duration-500",
                  featured
                    ? "md:bg-surface-dark md:border-surface-dark md:shadow-[0_24px_60px_rgba(10,21,32,0.25)] bg-surface-light border-border"
                    : "bg-surface-light border-border md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                )}
              >
                <Quote className={cn(
                  "absolute top-6 right-6 w-9 h-9 rotate-180",
                  featured ? "text-primary/15 md:text-primary/40" : "text-primary/15"
                )} />
                <div className="font-sans text-warning text-sm tracking-[2px] mb-4">
                  ★★★★★
                </div>
                <p className={cn(
                  "font-sans font-normal text-[0.92rem] leading-[1.75] flex-grow",
                  featured ? "text-surface-dark md:text-white/90" : "text-surface-dark"
                )}>
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <img loading="lazy" decoding="async"
                    src={review.image}
                    alt={review.name}
                    className={cn("w-11 h-11 rounded-full object-cover", featured && "md:ring-2 md:ring-primary/60")}
                  />
                  <div>
                    <div className={cn(
                      "font-sans font-semibold text-[0.82rem]",
                      featured ? "text-surface-dark md:text-white" : "text-surface-dark"
                    )}>
                      {review.name} · Patient
                    </div>
                    <div className={cn(
                      "font-sans font-light text-[0.68rem]",
                      featured ? "text-muted-foreground md:text-white/50" : "text-muted-foreground"
                    )}>
                      Verified Google Review
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <CarouselDots count={reviews.length} active={activeIndex} />

      </div>
    </section>
  );
}
