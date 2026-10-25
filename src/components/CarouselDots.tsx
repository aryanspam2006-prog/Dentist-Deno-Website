import { cn } from '../lib/utils';

export function CarouselDots({ count, active, dark = false }: { count: number, active: number, dark?: boolean }) {
  return (
    <div aria-hidden className="md:hidden flex justify-center items-center gap-1.5 mt-5">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            i === active ? "w-5 bg-primary" : cn("w-1.5", dark ? "bg-white/20" : "bg-surface-dark/15")
          )}
        />
      ))}
    </div>
  );
}
