import {copyFile, readFile, writeFile} from "node:fs/promises";
import {resolve} from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const videoPath = resolve(projectRoot, "out/kwh-launch-video-v5.mp4");
const posterPath = resolve(projectRoot, "out/kwh-launch-video-v5-poster.png");
const htmlPath = "/Users/arhamshomefolder/Downloads/kWh Personal Video (standalone).html";
const downloadVideoPath = "/Users/arhamshomefolder/Downloads/kWh Electric Launch Video v5.mp4";

const [video, poster] = await Promise.all([readFile(videoPath), readFile(posterPath)]);
const videoData = `data:video/mp4;base64,${video.toString("base64")}`;
const posterData = `data:image/png;base64,${poster.toString("base64")}`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="kWh Electric launch film: problem, solution, network, and growth.">
  <title>kWh Electric — Launch Film</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    html, body { width: 100%; height: 100%; margin: 0; background: #111111; }
    body {
      display: grid;
      place-items: center;
      padding: 20px;
      font-family: "DM Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main { width: min(100%, 177.7778vh); }
    video {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: #ffffff;
      border: 1px solid #2a2a2a;
    }
    p { margin: 12px 0 0; color: #a8a8a8; font-size: 13px; text-align: center; }
    a { color: #16a34a; }
  </style>
</head>
<body>
  <main>
    <video controls playsinline preload="metadata" poster="${posterData}" aria-label="kWh Electric launch film">
      <source src="${videoData}" type="video/mp4">
      Your browser cannot play this embedded video. Open the companion MP4 instead.
    </video>
    <p>kWh Electric · 1080p · 30 fps · 94 seconds</p>
  </main>
</body>
</html>
`;

await Promise.all([
  writeFile(htmlPath, html),
  copyFile(videoPath, downloadVideoPath),
]);

console.log(`Wrote ${htmlPath}`);
console.log(`Wrote ${downloadVideoPath}`);
