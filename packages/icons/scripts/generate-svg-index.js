import fs from "fs";
import path from "path";

const SVG_FOLDER = "./src/svg";
const INDEX_FILE = `${SVG_FOLDER}/index.ts`;

const svgFiles = fs.readdirSync(SVG_FOLDER).filter(file => file.endsWith(".svg"));

const svgExports = svgFiles
  .map(file => {
    const fileNameWithoutExtension = path.basename(file, ".svg");
    return `export { default as ${fileNameWithoutExtension} } from './${file}';`;
  })
  .join("\n");

fs.writeFileSync(INDEX_FILE, svgExports);

console.log(`Generated index.ts for SVG exports in ${SVG_FOLDER}`);
