import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const steps = [
  'Smile Assessment',
  'Care Planning',
  'Treatment Process',
  'Dental Maintenance'
];

export function ProgressSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white border-b border-border px-6 md:px-[60px] overflow-x-auto hide-scrollbar relative z-10 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex md:grid md:grid-cols-4 min-w-[800px] md:min-w-0">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <div 
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "relative py-8 px-8 border-r border-border/50 last:border-r-0 cursor-pointer transition-all duration-300 flex-1 md:flex-auto group",
                isActive ? "bg-surface-light/30" : "hover:bg-surface-light/50"
              )}
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-sans font-semibold text-[0.6rem] tracking-[0.2em] text-muted-foreground/60 uppercase group-hover:text-primary transition-colors">
                  Step 0{index + 1}
                </span>
                <span className={cn(
                  "font-sans font-bold text-[0.85rem] tracking-[0.02em] transition-colors relative z-10",
                  isActive ? "text-primary" : "text-surface-dark group-hover:text-primary"
                )}>
                  {step}
                </span>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="activeStepBorder"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
