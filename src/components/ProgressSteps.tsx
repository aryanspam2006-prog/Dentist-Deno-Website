import { useState } from 'react';
import { cn } from '../lib/utils';

const steps = [
  'Smile Assessment',
  'Care Planning',
  'Treatment Process',
  'Dental Maintenance'
];

export function ProgressSteps() {
  const [activeStep, setActiveStep] = useState(0);

  // Phones: full-width strip. Desktop: floating card that overlaps the bottom of the hero.
  return (
    <section className="group/steps relative z-20 bg-white border-b border-border shadow-sm md:-mt-14 md:px-[60px] md:border-0 md:shadow-none md:bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 md:bg-white md:rounded-2xl md:overflow-hidden md:border md:border-border/70 md:shadow-[0_24px_60px_rgba(10,21,32,0.14)]">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "relative py-5 px-6 md:py-8 md:px-8 border-border/50 cursor-pointer transition-all duration-300 group",
                "max-md:odd:border-r max-md:[&:nth-child(-n+2)]:border-b md:border-r md:last:border-r-0",
                isActive ? "bg-surface-light/30" : "hover:bg-surface-light/50"
              )}
            >
              <div className="flex flex-col gap-1.5">
                <span className={cn(
                  "font-sans font-semibold text-[0.65rem] md:text-[0.6rem] tracking-[0.2em] uppercase group-hover:text-primary transition-colors",
                  isActive ? "text-primary/70" : "text-muted-foreground/60"
                )}>
                  Step 0{index + 1}
                </span>
                <span className={cn(
                  "font-sans font-bold text-[0.8rem] md:text-[0.85rem] tracking-[0.02em] transition-colors relative z-10",
                  isActive ? "text-primary" : "text-surface-dark group-hover:text-primary"
                )}>
                  {step}
                </span>
              </div>

              {/* Auto-advancing fill bar; pauses while the strip is hovered */}
              {isActive && (
                <span
                  key={activeStep}
                  onAnimationEnd={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary z-10 origin-left animate-[step-fill_5s_linear_forwards] group-hover/steps:[animation-play-state:paused] motion-reduce:animate-none"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
