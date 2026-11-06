// One-off: paints the old project prints out of the hero wall photo.
// Usage: node scripts/clean-wall.mjs
// In:  public/images/redesign/about-wall.jpg
// Out: public/images/redesign/about-wall-clean.jpg
import sharp from "sharp";

const IN = "public/images/redesign/about-wall.jpg";
const OUT = "public/images/redesign/about-wall-clean.jpg";

// Area to fill, as fractions of the image
const RECT = { x0: 0.18, x1: 0.585, y0: 0.035, y1: 0.72 };
const SCALE = 6; // diffusion runs at 1/6 size
const GRAIN = 4; // ± per channel
const FEATHER = 30; // px

const src = sharp(IN);
const { width: W, height: H } = await src.metadata();
const full = await src.clone().removeAlpha().raw().toBuffer();

// 1. Diffusion (Laplace) fill at 1/6 scale: border pixels stay fixed, the inside relaxes toward their average
const w = Math.round(W / SCALE);
const h = Math.round(H / SCALE);
const small = new Float32Array(await sharp(IN).removeAlpha().resize(w, h, { kernel: "cubic" }).raw().toBuffer());
const sx0 = Math.floor(RECT.x0 * w), sx1 = Math.ceil(RECT.x1 * w);
const sy0 = Math.floor(RECT.y0 * h), sy1 = Math.ceil(RECT.y1 * h);
const inside = (x, y) => x > sx0 && x < sx1 && y > sy0 && y < sy1;

// Start the inside at the mean of the border so it converges quickly
const mean = [0, 0, 0];
let n = 0;
for (let y = sy0; y <= sy1; y++)
  for (let x = sx0; x <= sx1; x++)
    if (!inside(x, y)) {
      const i = (y * w + x) * 3;
      for (let c = 0; c < 3; c++) mean[c] += small[i + c];
      n++;
    }
for (let c = 0; c < 3; c++) mean[c] /= n;
for (let y = sy0 + 1; y < sy1; y++)
  for (let x = sx0 + 1; x < sx1; x++) for (let c = 0; c < 3; c++) small[(y * w + x) * 3 + c] = mean[c];

// Gauss-Seidel with over-relaxation
for (let it = 0; it < 4000; it++) {
  for (let y = sy0 + 1; y < sy1; y++)
    for (let x = sx0 + 1; x < sx1; x++) {
      const i = (y * w + x) * 3;
      for (let c = 0; c < 3; c++) {
        const avg = (small[i - 3 + c] + small[i + 3 + c] + small[i - w * 3 + c] + small[i + w * 3 + c]) / 4;
        small[i + c] += 1.9 * (avg - small[i + c]);
      }
    }
}

// 2. Upscale the filled small image with a blur
const smallBuf = Buffer.from(Uint8ClampedArray.from(small));
const up = await sharp(smallBuf, { raw: { width: w, height: h, channels: 3 } })
  .resize(W, H, { kernel: "cubic" })
  .blur(SCALE * 1.5)
  .raw()
  .toBuffer();

// 3. Composite into the full image with grain and a feathered edge
let seed = 1337;
const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const X0 = RECT.x0 * W, X1 = RECT.x1 * W, Y0 = RECT.y0 * H, Y1 = RECT.y1 * H;
const out = Buffer.from(full);
for (let y = Math.floor(Y0); y < Math.ceil(Y1); y++)
  for (let x = Math.floor(X0); x < Math.ceil(X1); x++) {
    const d = Math.min(x - X0, X1 - x, y - Y0, Y1 - y);
    if (d <= 0) continue;
    const a = Math.min(1, d / FEATHER);
    const i = (y * W + x) * 3;
    const g = (rand() * 2 - 1) * GRAIN;
    for (let c = 0; c < 3; c++) out[i + c] = Math.max(0, Math.min(255, Math.round(full[i + c] * (1 - a) + (up[i + c] + g) * a)));
  }

await sharp(out, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 90, mozjpeg: true }).toFile(OUT);
console.log(`Saved ${OUT} (${W}x${H}), filled x ${Math.round(X0)}-${Math.round(X1)}, y ${Math.round(Y0)}-${Math.round(Y1)}`);
