const sharp = require("sharp");
const path = require("path");

const dir = path.join(__dirname, "..", "images");
const files = ["brochure-3d.png", "holo-robot.png"];

async function removeBlackBg(file) {
  const input = path.join(dir, file);
  const image = sharp(input);
  const { width, height, channels } = await image.metadata();
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ch = info.channels;
  const w = info.width;
  const h = info.height;

  // Flood-fill from edges: mark background connected dark/near-black pixels
  const visited = new Uint8Array(w * h);
  const queue = [];

  const idx = (x, y) => y * w + x;
  const isBgColor = (i) => {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const max = Math.max(r, g, b);
    // black / very dark navy
    if (luma < 42 && max < 60) return true;
    // leftover green screen
    if (g > 100 && g - Math.max(r, b) > 40) return true;
    return false;
  };

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = idx(x, y);
    if (visited[p]) return;
    const i = p * ch;
    if (!isBgColor(i)) return;
    visited[p] = 1;
    queue.push(p);
  };

  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  while (queue.length) {
    const p = queue.pop();
    const x = p % w;
    const y = (p / w) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  for (let p = 0; p < w * h; p++) {
    const i = p * ch;
    if (visited[p]) {
      data[i + 3] = 0;
      continue;
    }
    // soften near-edge dark fringe
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luma < 28 && Math.max(r, g, b) < 40) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(input);
  console.log("Transparent:", file);
}

(async () => {
  for (const f of files) await removeBlackBg(f);
})();
