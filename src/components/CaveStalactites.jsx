// src/components/CaveStalactites.jsx
//
// Short pixel-art dirt stalactites hung from the underside of the dirt footer
// into the cave. The top few rows are a textured dirt "shelf" (blocky brown runs,
// lit on top -> shadowed underside) so the piece reads as the ground simply
// continuing, then short nubs taper out of it into the cave. Everything stays in
// the dirt's brown family, getting darker toward each point. Decorative only
// (aria-hidden, pointer-events-none); tiles seamlessly across any width.

const CELL = 6; // px per pixel-art cell — matches the dirt blocks above
const TILE_CELLS = 160; // tile width in cells (wide, so the horizontal repeat is hard to spot)
const BAND = 3; // textured dirt shelf rows that blend into the ground
const MINH = 3; // shortest nub, in cells
const MAXH = 7; // longest nub, in cells (kept short)
const ROWS = BAND + MAXH;
const TILE_W = TILE_CELLS * CELL;
const TILE_H = ROWS * CELL;

// Brown ramp sampled from grass3.png's dirt: light highlight -> deep shadow.
const BROWN = {
  l2: '#c69c6d',
  l1: '#a87f53',
  m: '#8a6440',
  d1: '#6b4c30',
  d2: '#4f3923',
  d3: '#372616',
};

// Deterministic PRNG so the ground never reshuffles between renders.
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Shelf colour by row: lit dirt up top, shadowed earth on the underside.
function bandColor(r, row) {
  if (row === 0) {
    if (r < 0.08) return BROWN.l1;
    if (r < 0.55) return BROWN.m;
    if (r < 0.9) return BROWN.d1;
    return BROWN.d2;
  }
  if (row === BAND - 1) {
    if (r < 0.15) return BROWN.m;
    if (r < 0.5) return BROWN.d1;
    if (r < 0.85) return BROWN.d2;
    return BROWN.d3;
  }
  if (r < 0.12) return BROWN.l1;
  if (r < 0.5) return BROWN.m;
  if (r < 0.85) return BROWN.d1;
  return BROWN.d2;
}

// Nub colour: deep brown so the nubs recede into the shadowed underside and the
// cave rather than standing out. The primary fill sits at the dark end of the
// ramp, darkening further to a near-black point; left edge keeps a quiet
// highlight, right edge falls into shadow.
function spikeColor(i, w, r, h) {
  const f = h <= 1 ? 0.5 : r / (h - 1);
  let hi;
  let mid;
  let lo;
  if (f < 0.45) {
    hi = BROWN.m; // quiet highlight (was the bright tan)
    mid = BROWN.d1; // darker primary fill
    lo = BROWN.d2;
  } else if (f < 0.8) {
    hi = BROWN.d1;
    mid = BROWN.d2;
    lo = BROWN.d3;
  } else {
    hi = BROWN.d2;
    mid = BROWN.d3;
    lo = BROWN.d3;
  }
  if (r === h - 1) return BROWN.d3; // dark point
  if (w === 1) return f > 0.5 ? BROWN.d3 : mid;
  if (i === 0) return hi; // left-lit edge
  if (i === w - 1) return lo; // right shadow edge
  return mid;
}

function buildGrid() {
  const grid = Array.from({ length: ROWS }, () => new Array(TILE_CELLS).fill(null));
  const rand = mulberry32(0x1a2b3c4d);
  const ri = (min, max) => min + Math.floor(rand() * (max - min + 1));

  // Textured dirt shelf: blocky horizontal runs of varied brown.
  for (let row = 0; row < BAND; row++) {
    let c = 0;
    while (c < TILE_CELLS) {
      const len = ri(2, 4);
      const col = bandColor(rand(), row);
      for (let k = 0; k < len && c < TILE_CELLS; k++, c++) grid[row][c] = col;
    }
  }

  // Short nubs hanging from the shelf (kept inside [1, TILE_CELLS-1] so the tile
  // edges are shelf-only and repeat-x stays seamless).
  let x = ri(1, 3);
  while (x < TILE_CELLS - 5) {
    const w0 = ri(2, 4);
    const h = ri(MINH, MAXH);
    const center = x + Math.floor(w0 / 2);
    let prevW = w0;
    for (let r = 0; r < h; r++) {
      let w;
      if (r === h - 1) {
        w = 1; // always come to a point
      } else {
        w = Math.max(1, Math.round(w0 * (1 - r / h)));
        if (w > prevW) w = prevW; // monotonic taper
        if (w < prevW && rand() < 0.3) w = prevW; // organic, blocky sides
      }
      prevW = w;
      const left = center - Math.floor(w / 2);
      for (let i = 0; i < w; i++) {
        const c = left + i;
        if (c < 0 || c >= TILE_CELLS) continue;
        grid[BAND + r][c] = spikeColor(i, w, r, h);
      }
    }
    x += w0 + ri(1, 3);
  }

  return grid;
}

// Merge vertical runs of equal colour per column -> far fewer <rect>s.
function buildSvg() {
  const grid = buildGrid();
  let rects = '';
  for (let c = 0; c < TILE_CELLS; c++) {
    let r = 0;
    while (r < ROWS) {
      const color = grid[r][c];
      if (!color) {
        r++;
        continue;
      }
      let run = 1;
      while (r + run < ROWS && grid[r + run][c] === color) run++;
      rects += `<rect x="${c * CELL}" y="${r * CELL}" width="${CELL}" height="${run * CELL}" fill="${color}"/>`;
      r += run;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE_W}" height="${TILE_H}" shape-rendering="crispEdges">${rects}</svg>`;
}

const DATA_URI = `data:image/svg+xml,${encodeURIComponent(buildSvg())}`;

const CaveStalactites = () => (
  <div
    aria-hidden="true"
    className="relative w-full pointer-events-none select-none"
    style={{
      height: TILE_H,
      // Sit above the cursor-following Kirby layer (zIndex 5 in App.jsx) so the
      // nubs occlude it — Kirby slips behind the ground here, matching the rocks
      // footer below. Stays under the post-footer content (zIndex 10).
      zIndex: 6,
      backgroundImage: `url("${DATA_URI}")`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'top center',
      backgroundSize: `${TILE_W}px ${TILE_H}px`,
      imageRendering: 'pixelated',
    }}
  />
);

export default CaveStalactites;
