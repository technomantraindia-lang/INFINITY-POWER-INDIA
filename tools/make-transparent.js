const sharp = require("sharp");
const path = require("path");

const files = ["brochure-3d.png", "holo-robot.png"];
const dir = path.join(__dirname, "..", "images");

async function removeDarkBackground(file) {
  const input = path.join(dir, file);
  const image = sharp(input);
  const { width, height } = await image.metadata();
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Dark navy / near-black background
    let alpha = 255;
    if (luma < 28 && max < 45) {
      alpha = 0;
    } else if (luma < 48 && max < 70) {
      alpha = Math.round(((luma - 28) / 20) * 255);
    }

    // Soften very flat dark corners slightly more for brochure
    if (file.includes("brochure") && luma < 55 && max - min < 18 && max < 80) {
      alpha = Math.min(alpha, Math.round(((luma - 20) / 35) * 255));
      if (alpha < 0) alpha = 0;
    }

    data[i + 3] = alpha;
  }

  const out = path.join(dir, file.replace(".png", "-transparent.png"));
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(out);

  // Also overwrite the main PNG used by the site
  await sharp(out).toFile(path.join(dir, file));
  console.log("Transparent:", file);
}

(async () => {
  for (const file of files) {
    await removeDarkBackground(file);
  }
})();
