import { motion } from 'motion/react';

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
  return (
    <section id="testimonials" className="bg-white py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-14">
          <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase">
            PATIENT REVIEWS
          </h3>
          <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.025em] mt-3 text-surface-dark">
            Don't take our word for it.
          </h2>
          <p className="font-sans font-normal text-[0.85rem] text-muted-foreground mt-2 flex items-center justify-center gap-2">
            <span className="text-warning text-sm tracking-[2px]">★★★★★</span>
            4.9 average from 1,200+ verified reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light rounded-2xl p-7 border border-border flex flex-col h-full"
            >
              <div className="font-sans text-warning text-sm tracking-[2px] mb-4">
                ★★★★★
              </div>
              <p className="font-sans font-normal text-[0.92rem] leading-[1.75] text-surface-dark flex-grow">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-sans font-semibold text-[0.82rem] text-surface-dark">
                    {review.name} · Patient
                  </div>
                  <div className="font-sans font-light text-[0.68rem] text-muted-foreground">
                    Verified Google Review
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
