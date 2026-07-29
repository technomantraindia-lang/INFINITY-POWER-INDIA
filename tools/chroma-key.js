const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const assets =
  "C:\\Users\\Technomantra\\.cursor\\projects\\c-Users-Technomantra-OneDrive-Desktop-infitypower\\assets";
const outDir = path.join(__dirname, "..", "images");

async function keyGreen(srcName, outName) {
  const input = path.join(assets, srcName);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h, channels: ch } = info;

  // Sample corner greens for key color
  const samples = [
    [2, 2],
    [w - 3, 2],
    [2, h - 3],
    [w - 3, h - 3],
    [w >> 1, 2],
    [2, h >> 1],
  ];
  let kr = 0,
    kg = 0,
    kb = 0;
  for (const [x, y] of samples) {
    const i = (y * w + x) * ch;
    kr += data[i];
    kg += data[i + 1];
    kb += data[i + 2];
  }
  kr = (kr / samples.length) | 0;
  kg = (kg / samples.length) | 0;
  kb = (kb / samples.length) | 0;
  console.log(outName, "key color", kr, kg, kb);

  for (let i = 0; i < data.length; i += ch) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dr = r - kr;
    const dg = g - kg;
    const db = b - kb;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    const greenBias = g - Math.max(r, b);

    let alpha = 255;
    if (dist < 55 || (greenBias > 45 && g > 120)) {
      alpha = 0;
    } else if (dist < 90 || (greenBias > 25 && g > 90)) {
      alpha = Math.round(((dist - 55) / 35) * 255);
      alpha = Math.max(0, Math.min(255, alpha));
    }

    // despill
    if (alpha > 0 && greenBias > 10) {
      data[i + 1] = Math.min(g, Math.round((r + b) * 0.55 + g * 0.2));
    }

    data[i + 3] = alpha;
  }

  // Flood-fill remaining edge green/near-key connected to border
  const visited = new Uint8Array(w * h);
  const q = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (visited[p]) return;
    const i = p * ch;
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2],
      a = data[i + 3];
    const dist = Math.hypot(r - kr, g - kg, b - kb);
    const greenBias = g - Math.max(r, b);
    if (a === 0 || dist < 100 || (greenBias > 30 && g > 80)) {
      visited[p] = 1;
      q.push(p);
    }
  };
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  while (q.length) {
    const p = q.pop();
    data[p * ch + 3] = 0;
    const x = p % w;
    const y = (p / w) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  const out = path.join(outDir, outName);
  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(out);
  console.log("Wrote", out);
}

(async () => {
  await keyGreen("brochure-green.jpg", "brochure-3d.png");
  await keyGreen("robot-green.jpg", "holo-robot.png");
})();
