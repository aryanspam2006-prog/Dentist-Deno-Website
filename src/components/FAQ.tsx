import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import * as Collapsible from '@radix-ui/react-collapsible';

const faqs = [
  {
    q: "Do you accept new patients?",
    a: "Yes — we're always welcoming new patients and their families. You can book online, call us, or simply walk in during opening hours. Same-day appointments are often available."
  },
  {
    q: "Is dental treatment painful?",
    a: "We prioritize your comfort at every step. All treatments are performed with local anesthesia so you don't feel pain during the procedure. We also offer sedation options for anxious patients."
  },
  {
    q: "How often should I come in for a check-up?",
    a: "We recommend a dental check-up and professional cleaning every 6 months. Some patients may benefit from more frequent visits — your dentist will advise based on your individual needs."
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible monthly payment plans through our financing partners. Ask our team about 0% interest options on qualifying treatments over $300."
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call our emergency line immediately — (800) 559-2648. We offer same-day emergency slots for toothaches, broken teeth, lost crowns, and dental trauma. Don't wait if you're in pain."
  },
  {
    q: "Can children be patients at Dentora?",
    a: "Absolutely. We treat patients of all ages, including children from their first tooth onwards. Our team is experienced in making young patients feel comfortable and confident about dental care."
  },
  {
    q: "How long do treatments take?",
    a: "It depends on the treatment. A standard check-up takes 45–60 minutes. Cleaning is 45 minutes. More complex procedures like implants or crowns involve multiple visits — your dentist will give you a full timeline at your consultation."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface-light py-16 md:py-24 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h3 className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] text-primary uppercase">
              FAQ
            </h3>
            <h2 className="font-sans font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.025em] mt-3 text-surface-dark">
              Common questions, clear answers.
            </h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <Collapsible.Root
                key={index}
                open={openIndex === index}
                onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
                className="border-b border-border py-5"
              >
                <Collapsible.Trigger className="flex justify-between items-center w-full text-left gap-4 cursor-pointer outline-none group">
                  <span className="font-sans font-semibold text-[0.92rem] text-surface-dark transition-colors group-hover:text-primary">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-220 ease-out ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </Collapsible.Trigger>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <Collapsible.Content forceMount asChild>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans font-light text-[0.82rem] text-muted-foreground leading-relaxed mt-3 pb-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    </Collapsible.Content>
                  )}
                </AnimatePresence>
              </Collapsible.Root>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
