'use client';

import { useEffect, useRef } from 'react';

/**
 * Round "View" label that follows the mouse over any element with a `data-view-cursor` attribute
 * (its value is the label). Mouse and trackpad only; touch screens keep the normal behavior.
 */
export function ViewCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;

    const loop = () => {
      // Eases toward the pointer; jumps straight there for reduced motion
      x += (tx - x) * (still ? 1 : 0.2);
      y += (ty - y) * (still ? 1 : 0.2);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const card = (e.target as Element).closest?.('[data-view-cursor]');
      if (card) {
        el.textContent = card.getAttribute('data-view-cursor');
        el.style.transform = 'scale(1)';
      }
    };
    const onOut = (e: PointerEvent) => {
      const to = e.relatedTarget as Element | null;
      if (!to?.closest?.('[data-view-cursor]')) el.style.transform = 'scale(0)';
    };

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ transform: "scale(0)" }}
      className="pointer-events-none fixed left-0 top-0 z-50 -ml-12 -mt-12 grid h-24 w-24 place-items-center rounded-full bg-[#141A10] text-[13.5px] font-medium text-[#F5F3EC] transition-transform duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)]"
    />
  );
}
