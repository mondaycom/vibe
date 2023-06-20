import postcss, { Plugin } from "postcss";
import * as fs from "fs";

const convertCSSFiles = async (filePaths: string[], plugins: Plugin[]) => {
  for (const filePath of filePaths) {
    const css = fs.readFileSync(filePath, "utf8");
    const output = await postcss(plugins).process(css, { from: undefined });

    // Overwrite the original file with the transformed CSS
    fs.writeFileSync(filePath, output.css);
  }
};
