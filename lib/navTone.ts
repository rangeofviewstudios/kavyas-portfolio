// Shared by components/Navigation and components/HomeNav: works out whether the page behind a fixed nav is light or dark.

export type Tone = 'onDark' | 'onLight';

/** Vertical centre of the nav pill and logo */
export const SAMPLE_Y = 40;

function luminanceOf(color: string): number | null {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
  if (a < 0.5) return null; // effectively transparent, keep walking up
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/**
 * Priority: explicit `data-nav-tone="light|dark"` on a section, then media (assumed
 * dark, matching the hero photography), then the first opaque background colour.
 * Elements inside `[data-site-nav]` are skipped so the nav never samples itself.
 */
export function detectTone(x: number = window.innerWidth / 2, y: number = SAMPLE_Y): Tone {
  const stack = document.elementsFromPoint(x, y);

  for (const start of stack) {
    if (start.closest('[data-site-nav]')) continue;

    let el: Element | null = start;
    while (el) {
      const explicit = el.getAttribute('data-nav-tone');
      if (explicit === 'light') return 'onLight';
      if (explicit === 'dark') return 'onDark';

      const tag = el.tagName;
      if (tag === 'IMG' || tag === 'VIDEO' || tag === 'CANVAS') return 'onDark';

      const style = getComputedStyle(el);
      if (style.backgroundImage !== 'none') return 'onDark';

      const lum = luminanceOf(style.backgroundColor);
      if (lum !== null) return lum > 0.45 ? 'onLight' : 'onDark';

      el = el.parentElement;
    }
  }

  // Nothing opaque found: the browser canvas is white.
  return 'onLight';
}
