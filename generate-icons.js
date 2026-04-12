/**
 * FinChat — gerador de ícones PNG
 * Usa apenas módulos built-in do Node.js (zlib + fs + path).
 * Gera todos os tamanhos para Android mipmap e electron/icon.png.
 *
 * Uso: node generate-icons.js
 */
'use strict';

const zlib = require('zlib');
const fs   = require('fs');
const path = require('path');

// ─── PNG writer ────────────────────────────────────────────────────────────────

function buildCrcTable() {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
}
const CRC_TABLE = buildCrcTable();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++)
    crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type, data) {
  const lenBuf  = Buffer.allocUnsafe(4);
  lenBuf.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf  = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

/** Converte array RGBA (Uint8Array) num Buffer PNG válido */
function encodePNG(w, h, rgba) {
  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8]  = 8; // 8 bits/canal
  ihdr[9]  = 6; // tipo RGBA
  ihdr[10] = ihdr[11] = ihdr[12] = 0;

  const rowSize = 1 + w * 4;
  const rawData = Buffer.allocUnsafe(h * rowSize);
  for (let y = 0; y < h; y++) {
    rawData[y * rowSize] = 0; // filter = None
    rawData.set(rgba.subarray(y * w * 4, (y + 1) * w * 4), y * rowSize + 1);
  }
  const compressed = zlib.deflateSync(rawData, { level: 6 });

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ─── Gerador do ícone ──────────────────────────────────────────────────────────

/**
 * Gera o ícone FinChat num canvas RGBA de tamanho `size×size`.
 * Design (viewport 108×108):
 *   • Fundo verde #1D9E75
 *   • Balão de chat branco com rabinho no canto inferior-esquerdo
 *   • Três linhas verdes dentro do balão (simulando mensagem digitada)
 */
function drawIcon(size) {
  const pixels = new Uint8Array(size * size * 4);
  const S = size / 108; // escala: pixel → unidade 108

  // Cores
  const BG  = [0x1D, 0x9E, 0x75]; // verde FinChat
  const FG  = [0xFF, 0xFF, 0xFF]; // branco
  const LN  = [0x1D, 0x9E, 0x75]; // linhas verdes dentro do balão

  // ── Balão (rounded-rect 108-units) ──────────────────────────────────────────
  // Corpo: centro (54,44), metade-w=32, metade-h=22, raio=11
  const bx = 54, by = 44, bw = 32, bh = 22, br = 11;

  // SDF de rounded-box
  function sdBox(ux, uy) {
    const dx = Math.abs(ux - bx) - bw + br;
    const dy = Math.abs(uy - by) - bh + br;
    return Math.min(Math.max(dx, dy), 0.0) +
           Math.sqrt(Math.max(dx, 0) ** 2 + Math.max(dy, 0) ** 2) - br;
  }

  // Rabinho: triângulo (40,66) → (21,82) → (32,66)
  const T = [[40, 66], [21, 82], [32, 66]];
  function side(ax, ay, bx2, by2, px, py) {
    return (bx2 - ax) * (py - ay) - (by2 - ay) * (px - ax);
  }
  function inTail(ux, uy) {
    const d1 = side(T[0][0], T[0][1], T[1][0], T[1][1], ux, uy);
    const d2 = side(T[1][0], T[1][1], T[2][0], T[2][1], ux, uy);
    const d3 = side(T[2][0], T[2][1], T[0][0], T[0][1], ux, uy);
    return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
  }

  // Linhas de texto dentro do balão (retângulos em 108-units)
  const LINES = [
    { x1: 32, y1: 34, x2: 74, y2: 38 }, // linha 1 — longa
    { x1: 32, y1: 42, x2: 66, y2: 46 }, // linha 2 — média
    { x1: 32, y1: 50, x2: 54, y2: 54 }, // linha 3 — curta
  ];

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const idx = (py * size + px) * 4;
      // centro do pixel em unidades 108
      const ux = (px + 0.5) / S;
      const uy = (py + 0.5) / S;

      const inside = sdBox(ux, uy) <= 0.5 || inTail(ux, uy);

      let inLine = false;
      if (inside) {
        for (const l of LINES) {
          if (ux >= l.x1 && ux <= l.x2 && uy >= l.y1 && uy <= l.y2) {
            inLine = true;
            break;
          }
        }
      }

      const color = inside ? (inLine ? LN : FG) : BG;
      pixels[idx]     = color[0];
      pixels[idx + 1] = color[1];
      pixels[idx + 2] = color[2];
      pixels[idx + 3] = 255;
    }
  }
  return pixels;
}

// ─── Redimensionamento bilinear ────────────────────────────────────────────────

function scaleDown(src, srcSize, dstSize) {
  const dst   = new Uint8Array(dstSize * dstSize * 4);
  const ratio = srcSize / dstSize;

  for (let dy = 0; dy < dstSize; dy++) {
    for (let dx = 0; dx < dstSize; dx++) {
      const sx0 = dx * ratio, sx1 = (dx + 1) * ratio;
      const sy0 = dy * ratio, sy1 = (dy + 1) * ratio;

      let r = 0, g = 0, b = 0, a = 0, w = 0;
      for (let sy = Math.floor(sy0); sy < Math.ceil(sy1) && sy < srcSize; sy++) {
        for (let sx = Math.floor(sx0); sx < Math.ceil(sx1) && sx < srcSize; sx++) {
          const wy = Math.min(sy + 1, sy1) - Math.max(sy, sy0);
          const wx = Math.min(sx + 1, sx1) - Math.max(sx, sx0);
          const weight = wx * wy;
          const si = (sy * srcSize + sx) * 4;
          r += src[si]     * weight;
          g += src[si + 1] * weight;
          b += src[si + 2] * weight;
          a += src[si + 3] * weight;
          w += weight;
        }
      }
      const di = (dy * dstSize + dx) * 4;
      dst[di]     = Math.round(r / w);
      dst[di + 1] = Math.round(g / w);
      dst[di + 2] = Math.round(b / w);
      dst[di + 3] = Math.round(a / w);
    }
  }
  return dst;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

const MASTER = 512;
console.log(`Gerando ícone master ${MASTER}×${MASTER}…`);
const master = drawIcon(MASTER);

const BASE = path.join(__dirname, 'android/app/src/main/res');

const ANDROID_SIZES = [
  { folder: 'mipmap-mdpi',    size: 48  },
  { folder: 'mipmap-hdpi',    size: 72  },
  { folder: 'mipmap-xhdpi',   size: 96  },
  { folder: 'mipmap-xxhdpi',  size: 144 },
  { folder: 'mipmap-xxxhdpi', size: 192 },
];

for (const { folder, size } of ANDROID_SIZES) {
  const scaled = scaleDown(master, MASTER, size);
  const png    = encodePNG(size, size, scaled);
  const dir    = path.join(BASE, folder);

  const files = ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png'];
  for (const name of files) {
    fs.writeFileSync(path.join(dir, name), png);
  }
  console.log(`  ✓ ${folder}/ (${size}×${size})`);
}

// Electron icon
const electronDir = path.join(__dirname, 'electron');
if (!fs.existsSync(electronDir)) fs.mkdirSync(electronDir, { recursive: true });

const icon512 = encodePNG(MASTER, MASTER, master);
fs.writeFileSync(path.join(electronDir, 'icon.png'), icon512);
console.log(`  ✓ electron/icon.png (${MASTER}×${MASTER})`);

// Também salva na raiz para uso geral (PWA, etc.)
fs.writeFileSync(path.join(__dirname, 'icon.png'), icon512);
console.log(`  ✓ icon.png (${MASTER}×${MASTER})`);

console.log('\nConcluído! Execute "npx cap sync" para aplicar no projeto Android.');
