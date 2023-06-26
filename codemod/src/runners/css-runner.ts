import postcss from "postcss";
import * as fs from "fs";
import {glob} from "glob";

export const convertCSSFiles = async (paths: string[], plugins: postcss.Plugin[]) => {
  for (const path of paths) {
    const pathStats = fs.statSync(path);

    if (pathStats.isDirectory()) {
      const pattern = `${path}/**/*.scss`;
      const files = await glob(pattern);
      console.log(files)
    }
    else if (pathStats.isFile())  {
      convertCSSFile(path, plugins)
    }
  }
};

export async function convertCSSFile(filePath, plugins) {
  const css = fs.readFileSync(filePath, "utf8");
  const output = await postcss(plugins).process(css, { from: undefined });

   // Overwrite the original file with the transformed CSS
   fs.writeFileSync(filePath, output.css);
}
