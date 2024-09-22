import fs from "fs";
import path from "path";

const DIST_SVG_FOLDER = path.resolve("./dist/svg");
const INDEX_FILE = path.join(DIST_SVG_FOLDER, "index.js");
const TYPES_FILE = path.join(DIST_SVG_FOLDER, "index.d.ts");

const svgFiles = fs.readdirSync(DIST_SVG_FOLDER).filter(file => file.endsWith(".svg"));

const svgExports = svgFiles
  .map(file => {
    const fileNameWithoutExtension = path.basename(file, ".svg");
    return `export { default as ${fileNameWithoutExtension} } from './${file}';`;
  })
  .join("\n");

fs.writeFileSync(INDEX_FILE, svgExports);

const svgTypes = svgFiles
  .map(file => {
    const fileNameWithoutExtension = path.basename(file, ".svg");
    return `export declare const ${fileNameWithoutExtension}: string;`;
  })
  .join("\n");

fs.writeFileSync(TYPES_FILE, svgTypes);

console.log(`Generated index.js and index.d.ts for SVG exports in ${DIST_SVG_FOLDER}`);
