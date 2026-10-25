import { useEffect, useState, type RefObject } from 'react';

// Index of the item currently snapped to the start of a horizontal scroll container
export function useSnapIndex(ref: RefObject<HTMLElement | null>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
      if (atEnd) {
        setIndex(el.children.length - 1);
        return;
      }
      const step = first.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
      setIndex(Math.round(el.scrollLeft / step));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [ref]);

  return index;
}
