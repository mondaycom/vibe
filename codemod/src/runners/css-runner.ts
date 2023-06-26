import postcss from "postcss";
import * as fs from "fs";
import {glob} from "glob";

export const convertCSSFiles = async (paths: string[], plugins: postcss.Plugin[]) => {
  for (const path of paths) {
    const pathStats = fs.statSync(path);

    if (pathStats.isDirectory()) {
      const pattern = `${path}/**/*.scss`;
      const files = await glob(pattern);
      files.forEach(filePath => convertCSSFile(filePath, plugins));
    }
    else if (pathStats.isFile())  {
      convertCSSFile(path, plugins)
    }
  }
};

export async function convertCSSFile(filePath, plugins) {
  const css = fs.readFileSync(filePath, "utf8");
   postcss(plugins).process(css, { from: undefined }).then((output => {
    // Overwrite the original file with the transformed CSS
    fs.writeFileSync(filePath, output.css);
  })).catch(error => {
    console.error(`The file ${filePath} is not converted because of the following error: ${error}`);
   });


}
