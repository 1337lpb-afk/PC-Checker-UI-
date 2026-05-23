import fs from "fs";
import path from "path";

const dot =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="white" opacity="0.5"/></svg>';
const decor =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 864 720"><path d="M0 360 Q432 0 864 360 T0 360" fill="none" stroke="white" stroke-opacity="0.15" stroke-width="2"/></svg>';
const rect =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219 79"><rect width="219" height="79" rx="8" fill="white" opacity="0.1"/></svg>';

const dirs = {
  "src/screens/ScannerLogin": ["image.svg", "vector.svg", "vector-2.svg"],
  "src/screens/Scanner": [
    "ellipse-40.svg",
    "ellipse-41.svg",
    "ellipse-42.svg",
    "ellipse-43.svg",
    "ellipse-44.svg",
    "ellipse-45.svg",
    "rectangle-47.svg",
    "vector.svg",
  ],
  "src/screens/Finish": [
    "image.svg",
    "rectangle-47.svg",
    "vector.svg",
    "vector-2.svg",
    "vector-3.svg",
    "vector-4.svg",
    "vector-5.svg",
    "vector-6.svg",
    "vector-7.svg",
  ],
};

for (const [dir, files] of Object.entries(dirs)) {
  fs.mkdirSync(dir, { recursive: true });
  for (const file of files) {
    let content = dot;
    if (file === "vector.svg") content = decor;
    else if (file === "rectangle-47.svg") content = rect;
    fs.writeFileSync(path.join(dir, file), content);
  }
}

const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);
fs.writeFileSync("src/screens/Scanner/group-260.png", png);
console.log("Placeholder assets created.");
